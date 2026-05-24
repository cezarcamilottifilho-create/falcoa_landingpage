'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type Target = gsap.TweenTarget

export interface FadeInUpOptions {
  duration?: number
  delay?: number
  ease?: string
  y?: number
  scrollTrigger?: ScrollTrigger.Vars | string | Element
}

export function fadeInUp(target: Target, options: FadeInUpOptions = {}) {
  const {
    duration = 0.9,
    delay = 0,
    ease = 'power3.out',
    y = 60,
    scrollTrigger,
  } = options

  return gsap.fromTo(
    target,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      ...(scrollTrigger ? { scrollTrigger } : {}),
    },
  )
}

export interface StaggerInOptions extends FadeInUpOptions {
  stagger?: number
}

export function staggerIn(targets: Target, options: StaggerInOptions = {}) {
  const {
    duration = 0.9,
    delay = 0,
    ease = 'power3.out',
    y = 40,
    stagger = 0.15,
    scrollTrigger,
  } = options

  return gsap.fromTo(
    targets,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      stagger,
      ...(scrollTrigger ? { scrollTrigger } : {}),
    },
  )
}

export interface CountUpOptions {
  duration?: number
  ease?: string
  delay?: number
  decimals?: number
  prefix?: string
  suffix?: string
  scrollTrigger?: ScrollTrigger.Vars | string | Element
}

export function countUp(
  target: string | Element,
  endValue: number,
  options: CountUpOptions = {},
) {
  const {
    duration = 1.8,
    ease = 'power3.out',
    delay = 0,
    decimals = 0,
    prefix = '',
    suffix = '',
    scrollTrigger,
  } = options

  const element =
    typeof target === 'string' ? document.querySelector(target) : target
  if (!element) return null

  const state = { value: 0 }
  const factor = Math.pow(10, decimals)

  return gsap.to(state, {
    value: endValue,
    duration,
    ease,
    delay,
    snap: { value: 1 / factor },
    onUpdate: () => {
      element.textContent = `${prefix}${state.value.toFixed(decimals)}${suffix}`
    },
    ...(scrollTrigger ? { scrollTrigger } : {}),
  })
}

export function revealWords(target: string | Element, options: FadeInUpOptions & { stagger?: number } = {}) {
  const {
    duration = 1.1,
    delay = 0.3,
    ease = 'expo.out',
    y = 60,
    stagger = 0.08,
    scrollTrigger,
  } = options

  const element =
    typeof target === 'string' ? (document.querySelector(target) as HTMLElement | null) : (target as HTMLElement)
  if (!element) return null

  if (!element.dataset.wordsWrapped) {
    const text = element.textContent ?? ''
    element.innerHTML = text
      .split(/(\s+)/)
      .map((chunk) =>
        /\s+/.test(chunk)
          ? chunk
          : `<span class="word" style="display:inline-block;will-change:transform,opacity">${chunk}</span>`,
      )
      .join('')
    element.dataset.wordsWrapped = 'true'
  }

  return gsap.fromTo(
    element.querySelectorAll('.word'),
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      stagger,
      ...(scrollTrigger ? { scrollTrigger } : {}),
    },
  )
}
