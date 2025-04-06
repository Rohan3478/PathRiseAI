// components/OnboardingRedirect.js
"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import { getUserOnboardingStatus } from '@/actions/user'

export default function OnboardingRedirect() {
  const { isLoaded, userId } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && userId) {
      checkOnboardingStatus()
    }
  }, [isLoaded, userId])

  async function checkOnboardingStatus() {
    try {
      const { isOnboarded } = await getUserOnboardingStatus()
      if (!isOnboarded) {
        router.push('/onboarding')
      }
    } catch (error) {
      console.error('Error checking onboarding status:', error)
    }
  }

  return null
}