'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamRankingTable from './components/TeamRankingTable';
import { ParticipantRankingTable } from './components/ParticipantRankingTable';
import Dashboard from './components/Dashboard';
import NotificationDialog from '@/components/NotificationDialog';

export default function RankingsPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGenerateRankings = async () => {
    try {
      setIsGenerating(true);
      const response = await fetch('/api/rankings/generate', {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate rankings');
      }

      setShowSuccessDialog(true);
      // Refresh the page to show new rankings after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error('Error generating rankings:', error);
      setErrorMessage('Failed to generate rankings. Please try again.');
      setShowErrorDialog(true);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Rankings</h1>
        <Button
          onClick={handleGenerateRankings}
          disabled={isGenerating}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Generating Rankings...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Generate Rankings</span>
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="teams" className="space-y-6">
        <TabsList>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="participants">Participants</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        </TabsList>

        <TabsContent value="teams">
          <Card>
            <CardHeader>
              <CardTitle>Team Rankings</CardTitle>
            </CardHeader>
            <CardContent>
              <TeamRankingTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="participants">
          <Card>
            <CardHeader>
              <CardTitle>Participant Rankings</CardTitle>
            </CardHeader>
            <CardContent>
              <ParticipantRankingTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dashboard">
          <Dashboard />
        </TabsContent>
      </Tabs>

      <NotificationDialog
        open={showSuccessDialog}
        onClose={() => setShowSuccessDialog(false)}
        title="Success"
        message="Rankings generated successfully!"
        type="success"
      />

      <NotificationDialog
        open={showErrorDialog}
        onClose={() => setShowErrorDialog(false)}
        title="Error"
        message={errorMessage}
        type="error"
      />
    </div>
  );
} 