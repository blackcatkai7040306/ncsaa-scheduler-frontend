'use client';

import { useState } from 'react';
import ScheduleGenerator from './components/ScheduleGenerator';
import ScheduleDisplay from './components/ScheduleDisplay';

export default function Home() {
  const [schedule, setSchedule] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            NCSAA Basketball Scheduling System
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Generate and view optimized basketball game schedules
          </p>
        </header>

        {/* Schedule Generator */}
        <ScheduleGenerator 
          onScheduleGenerated={setSchedule}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />

        {/* Schedule Display */}
        {schedule && !isLoading && (
          <ScheduleDisplay schedule={schedule} />
        )}
      </div>
    </div>
  );
}
