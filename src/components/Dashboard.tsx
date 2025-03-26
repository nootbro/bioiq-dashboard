'use client';
import React, { useState } from 'react';
import { DashboardLayout } from './DashboardLayout';
import { BiologicalAgeRing } from './BiologicalAgeRing';
import { GlucoseResponseChart, sampleGlucoseData } from './GlucoseResponseChart';
import { HealthPillarsOverview } from './HealthPillarsOverview';
import { BiomarkerCategorySection } from './BiomarkerCategorySection';
import { MembershipTierComparison } from './MembershipTierComparison';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { mockUserProfile, membershipTiers, healthPillars, biomarkers } from '../data/mockData';

export const Dashboard: React.FC = () => {
  // Get the user's membership tier details
  const userMembershipTier = mockUserProfile.membershipTier;
  const currentTierDetails = membershipTiers.find(tier => tier.id === userMembershipTier)!;
  
  // Group biomarkers by category
  const biomarkersByCategory = biomarkers.reduce((acc, biomarker) => {
    if (!acc[biomarker.category]) {
      acc[biomarker.category] = [];
    }
    acc[biomarker.category].push(biomarker);
    return acc;
  }, {} as Record<string, typeof biomarkers>);
  
  // Category display names
  const categoryNames: Record<string, string> = {
    cardiovascular: 'Cardiovascular Health',
    metabolic: 'Metabolic Health',
    hormonal: 'Hormonal Health',
    immune: 'Immune & Inflammation',
    other: 'Other Biomarkers'
  };
  
  return (
    <DashboardLayout userProfile={mockUserProfile} membershipTier={currentTierDetails}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 font-montreal">Welcome back, {mockUserProfile.name}</h1>
        <p className="text-gray-300">
          Your health data was last updated <span className="text-bioiq-300">2 days ago</span>
        </p>
      </div>
      
      {/* Overview Section */}
      <ScrollAnimatedSection className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-800 rounded-2xl p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold text-white mb-4 font-montreal">Biological Age</h2>
            <BiologicalAgeRing 
              biologicalAge={mockUserProfile.biologicalAge} 
              chronologicalAge={mockUserProfile.chronologicalAge}
              size={220}
            />
          </div>
          
          <div className="bg-dark-800 rounded-2xl p-6 flex flex-col items-center md:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4 font-montreal">Health Pillars</h2>
            <HealthPillarsOverview pillars={healthPillars} size={280} />
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* Glucose Response Chart */}
      <ScrollAnimatedSection className="mb-8">
        <div className="bg-dark-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 font-montreal">Glucose Response</h2>
          <p className="text-gray-300 mb-4">
            Your glucose levels over the past 24 hours, with meal and activity markers.
          </p>
          <GlucoseResponseChart data={sampleGlucoseData} width={800} height={300} />
        </div>
      </ScrollAnimatedSection>
      
      {/* Biomarker Categories */}
      {Object.entries(biomarkersByCategory).map(([category, categoryBiomarkers]) => (
        <ScrollAnimatedSection key={category} className="mb-8">
          <BiomarkerCategorySection
            title={categoryNames[category] || category}
            biomarkers={categoryBiomarkers}
            userMembershipTier={userMembershipTier}
          />
        </ScrollAnimatedSection>
      ))}
      
      {/* Membership Tier Comparison */}
      <ScrollAnimatedSection className="mb-8">
        <MembershipTierComparison
          tiers={membershipTiers}
          currentTier={userMembershipTier}
        />
      </ScrollAnimatedSection>
      
      {/* NootBro Integration Section */}
      <ScrollAnimatedSection className="mb-8">
        <div className="bg-dark-800 rounded-2xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center overflow-hidden mr-3">
              <span className="text-xl">🧠</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-montreal">NootBro Insights</h2>
              <div className="text-sm text-gray-300">Expert-driven recommendations</div>
            </div>
          </div>
          
          <div className="bg-dark-700 rounded-xl p-4 mb-4">
            <p className="text-gray-300 mb-2">
              Based on your elevated ApoB levels, consider incorporating more omega-3 fatty acids and fiber into your diet.
            </p>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-400">
                Recommended by <span className="text-bioiq-300">NootBro</span>
              </div>
              <button className="text-xs bg-dark-800 text-bioiq-400 px-3 py-1 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="bg-dark-700 rounded-xl p-4">
            <p className="text-gray-300 mb-2">
              Your glucose variability shows improvement. Continue timing carbohydrate intake around exercise for optimal results.
            </p>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-400">
                Recommended by <span className="text-bioiq-300">NootBro</span>
              </div>
              <button className="text-xs bg-dark-800 text-bioiq-400 px-3 py-1 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* Footer */}
      <div className="text-center text-gray-400 text-xs mt-16 mb-8">
        <p>BioIQ by Notable &copy; 2025. All rights reserved.</p>
        <p className="mt-1">Premium health analytics for optimal performance.</p>
      </div>
    </DashboardLayout>
  );
};