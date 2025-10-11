'use client'

import AndroidApps from '@/components/projectspage/AndroidApps';
import ProjectsPage from '@/components/projectspage/ProjectsPage';
import { MyContext } from '@/Context/Context';
import { useContext } from 'react';

export default function Projects() {
    const { theme } = useContext(MyContext);

    return (
        <div className={theme === 'dark' ? 'bg-gray-800' : 'bg-soft-white'}>
            <AndroidApps />
            <ProjectsPage />
        </div>
    );
}