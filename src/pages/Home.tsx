import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import EventArchitecture from '@/components/EventArchitecture';
import CognitiveIntelligence from '@/components/CognitiveIntelligence';
import FrontendEngineering from '@/components/FrontendEngineering';
import BusinessROI from '@/components/BusinessROI';
import TechStack from '@/components/TechStack';
import OperationalResilience from '@/components/OperationalResilience';
import OperationalSecurity from '@/components/OperationalSecurity';
import ExecutionKernels from '@/components/ExecutionKernels';

const Home: React.FC = () => {
    return (
        <main className="relative">
            <div className="noise-overlay"></div>
            <Hero />
            <About />
            <EventArchitecture />
            <CognitiveIntelligence />
            <FrontendEngineering />
            <BusinessROI />
            <TechStack />
            <OperationalResilience />
            <OperationalSecurity />
            <ExecutionKernels />
        </main>
    );
};

export default Home;
