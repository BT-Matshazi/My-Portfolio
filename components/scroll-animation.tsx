"use client"

import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

type ScrollAnimationProps = {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
}

export default function ScrollAnimation({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  direction = 'up',
  distance = 30,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const initialStyles = useRef({
    opacity: 0,
    transform: direction === 'up' ? `translateY(${distance}px)`
      : direction === 'down' ? `translateY(-${distance}px)`
      : direction === 'left' ? `translateX(${distance}px)`
      : direction === 'right' ? `translateX(-${distance}px)`
      : 'none',
  })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Apply initial styles
    Object.assign(element.style, {
      opacity: '0',
      transform: initialStyles.current.transform,
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1'
              element.style.transform = 'translateY(0) translateX(0)'
            }, 100)
            
            if (once) {
              observer.unobserve(element)
            }
          } else if (!once) {
            element.style.opacity = '0'
            element.style.transform = initialStyles.current.transform
          }
        })
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay, direction, distance, once, threshold])

  return (
    <div ref={ref} className={cn('transition-all will-change-transform', className)}>
      {children}
    </div>
  )
}