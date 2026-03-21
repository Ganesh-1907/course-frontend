import { apiCall } from './api';

export interface ScheduleData {
    id?: number;
    courseCode?: string;
    courseName?: string;
    dateRange: string;
    startDate?: string;
    endDate?: string;
    timeRange: string;
    startTime?: string;
    endTime?: string;
    trainerName: string;
    trainerImage: string;
    originalPrice: string | number;
    discountedPrice: string | number;
    currency?: string;
    discountPercentage: string | number;
    scheduleId?: number;
    courseId?: number;
    batchType?: string;
    courseType?: string;
    language?: string;
    capacityRemaining?: number;
}

export const getRecentSchedule = async (courseName: string): Promise<ScheduleData | null> => {
    try {
        const response = await apiCall(`/user/courses/v2/recent-schedule?courseName=${encodeURIComponent(courseName)}`);
        if (response.success && response.data) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error('Error fetching recent schedule:', error);
        return null;
    }
};

export const getAllSchedules = async (courseName: string): Promise<{ schedules: ScheduleData[], course: { id: number, name: string } } | null> => {
    try {
        const response = await apiCall(`/user/courses/v2/all-schedules?courseName=${encodeURIComponent(courseName)}`);
        if (response.success && response.data) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error('Error fetching all schedules:', error);
        return null;
    }
};

export const getSchedulesByCategory = async (category: string): Promise<{ schedules: ScheduleData[], serviceType: string } | null> => {
    try {
        const response = await apiCall(`/user/courses/v2/schedules-by-type/${encodeURIComponent(category)}`);
        if (response.success && response.data) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error('Error fetching schedules by category:', error);
        return null;
    }
};
