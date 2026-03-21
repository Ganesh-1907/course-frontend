/**
 * A curated list of 25 professional, course-related images from Unsplash.
 * These are tailored for a course-selling website, featuring tutors teaching,
 * students collaborating in cafes/parks, and professional client meetings.
 */
export const COURSE_IMAGES = [
    
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", // Students collaborating in a cafe
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", // Developers in a tech meeting
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", // Professional client meeting/presentation
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80", // Students studying together in a park
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", // Team success discussion in a cafe (Fixed broken index 5)
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80", // Developer practicing coding
    
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&q=80", // Student focusing on learning via laptop
    "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80", // Creative design review session
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80", // Group Study in Park Setting
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", // Tutor Teaching in Cafe
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80", // Collaborative group discussion/brainstorming
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // Marketing and growth analytics strategy
    "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800&q=80", // Corporate training workshop/seminar
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&q=80", // Remote education focused home office

    "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80", // Team celebration and achievement
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80", // Detailed professional meeting review
];

/**
 * Returns a consistent image path for a given course ID.
 * @param courseId The unique ID of the course.
 * @returns An Unsplash image URL.
 */
export const getCourseImage = (courseId: number | string | undefined): string => {
    if (!courseId) return COURSE_IMAGES[0];

    // Convert string IDs to numeric if needed
    const numericId = typeof courseId === 'number'
        ? courseId
        : parseInt(courseId.toString().replace(/\D/g, '')) || 0;

    return COURSE_IMAGES[numericId % COURSE_IMAGES.length];
};
