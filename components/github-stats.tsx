"use client";

import { useEffect, useState } from "react";
import { Github, Star, GitFork, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

export function GitHubStats() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch("https://api.github.com/users/BT-Matshazi");
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch repositories (sorted by stars)
        const reposResponse = await fetch(
          "https://api.github.com/users/BT-Matshazi/repos?sort=stars&per_page=6"
        );
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="bg-card border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Github className="h-5 w-5" />
          <h3 className="font-semibold">GitHub Activity</h3>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-muted/50 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Github className="h-5 w-5" />
          <h3 className="font-semibold">GitHub Activity</h3>
        </div>
        <Link
          href="https://github.com/BT-Matshazi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View Profile →
        </Link>
      </div>

      {user && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <p className="text-2xl font-bold">{user.public_repos}</p>
            <p className="text-xs text-muted-foreground">Repositories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{user.followers}</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{user.following}</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
        </div>
      )}

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground">Popular Repositories</h4>
        {repos.slice(0, 4).map((repo) => (
          <Link
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 border rounded-lg hover:border-foreground/20 transition-colors group"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h5 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                  {repo.name}
                </h5>
                {repo.description && (
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                    {repo.description}
                  </p>
                )}
                <div className="flex items-center gap-3 mt-2">
                  {repo.language && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Code2 className="h-3 w-3" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <GitFork className="h-3 w-3" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
