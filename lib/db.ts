import { 
  DEFAULT_SETTINGS 
} from './constants';
import { 
  INITIAL_COURSES, 
  INITIAL_TEACHERS, 
  INITIAL_BATCHES, 
  INITIAL_ENQUIRIES, 
  INITIAL_TRIALS, 
  INITIAL_STUDENTS, 
  INITIAL_ATTENDANCE, 
  INITIAL_TEST_RESULTS, 
  INITIAL_TESTIMONIALS, 
  INITIAL_ANNOUNCEMENTS, 
  INITIAL_STUDY_MATERIALS 
} from './mockData';
import { 
  InstituteSettings, 
  Course, 
  Teacher, 
  Batch, 
  Enquiry, 
  TrialRegistration, 
  Student, 
  AttendanceRecord, 
  TestResult, 
  Testimonial, 
  Announcement, 
  StudyMaterial 
} from './types';

// Helper function to read from LocalStorage or default
function getStoredData<T>(key: string, defaultVal: T): T {
  if (typeof window === 'undefined') return defaultVal;
  try {
    const item = localStorage.getItem(`prime_learning_${key}`);
    return item ? JSON.parse(item) : defaultVal;
  } catch (err) {
    console.error(`Error reading ${key} from localStorage:`, err);
    return defaultVal;
  }
}

function setStoredData<T>(key: string, val: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`prime_learning_${key}`, JSON.stringify(val));
  } catch (err) {
    console.error(`Error saving ${key} to localStorage:`, err);
  }
}

export const db = {
  // Settings
  getSettings: (): InstituteSettings => {
    return getStoredData('settings', DEFAULT_SETTINGS);
  },
  saveSettings: (settings: InstituteSettings): InstituteSettings => {
    setStoredData('settings', settings);
    return settings;
  },

  // Courses
  getCourses: (): Course[] => {
    return getStoredData('courses', INITIAL_COURSES);
  },
  saveCourses: (courses: Course[]): Course[] => {
    setStoredData('courses', courses);
    return courses;
  },

  // Teachers
  getTeachers: (): Teacher[] => {
    return getStoredData('teachers', INITIAL_TEACHERS);
  },
  getTeacherById: (id: string): Teacher | undefined => {
    const teachers = getStoredData('teachers', INITIAL_TEACHERS);
    return teachers.find(t => t.id === id);
  },
  saveTeachers: (teachers: Teacher[]): Teacher[] => {
    setStoredData('teachers', teachers);
    return teachers;
  },

  // Batches
  getBatches: (): Batch[] => {
    return getStoredData('batches', INITIAL_BATCHES);
  },
  saveBatches: (batches: Batch[]): Batch[] => {
    setStoredData('batches', batches);
    return batches;
  },

  // Enquiries
  getEnquiries: (): Enquiry[] => {
    return getStoredData('enquiries', INITIAL_ENQUIRIES);
  },
  addEnquiry: (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>): Enquiry => {
    const current = getStoredData<Enquiry[]>('enquiries', INITIAL_ENQUIRIES);
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: `enq-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'New',
      notes: 'New inquiry from website form.',
    };
    const updated = [newEnquiry, ...current];
    setStoredData('enquiries', updated);
    return newEnquiry;
  },
  updateEnquiryStatus: (id: string, status: Enquiry['status'], notes?: string): Enquiry[] => {
    const current = getStoredData<Enquiry[]>('enquiries', INITIAL_ENQUIRIES);
    const updated = current.map(enq => {
      if (enq.id === id) {
        return { ...enq, status, notes: notes !== undefined ? notes : enq.notes };
      }
      return enq;
    });
    setStoredData('enquiries', updated);
    return updated;
  },

  // Trial Registrations
  getTrials: (): TrialRegistration[] => {
    return getStoredData('trials', INITIAL_TRIALS);
  },
  addTrial: (trialData: Omit<TrialRegistration, 'id' | 'createdAt' | 'status'>): TrialRegistration => {
    const current = getStoredData<TrialRegistration[]>('trials', INITIAL_TRIALS);
    const newTrial: TrialRegistration = {
      ...trialData,
      id: `trial-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'Registered',
      notes: 'Submitted online free trial form.',
    };
    const updated = [newTrial, ...current];
    setStoredData('trials', updated);
    return newTrial;
  },
  updateTrialStatus: (id: string, status: TrialRegistration['status'], notes?: string, trialDate?: string): TrialRegistration[] => {
    const current = getStoredData<TrialRegistration[]>('trials', INITIAL_TRIALS);
    const updated = current.map(tr => {
      if (tr.id === id) {
        return {
          ...tr,
          status,
          notes: notes !== undefined ? notes : tr.notes,
          trialDate: trialDate !== undefined ? trialDate : tr.trialDate,
        };
      }
      return tr;
    });
    setStoredData('trials', updated);
    return updated;
  },

  // Students
  getStudents: (): Student[] => {
    return getStoredData('students', INITIAL_STUDENTS);
  },
  saveStudents: (students: Student[]): Student[] => {
    setStoredData('students', students);
    return students;
  },

  // Attendance
  getAttendance: (): AttendanceRecord[] => {
    return getStoredData('attendance', INITIAL_ATTENDANCE);
  },
  recordAttendance: (records: Omit<AttendanceRecord, 'id'>[]): AttendanceRecord[] => {
    const current = getStoredData<AttendanceRecord[]>('attendance', INITIAL_ATTENDANCE);
    const newRecords = records.map(r => ({ ...r, id: `att-${Date.now()}-${Math.random().toString(36).substr(2, 4)}` }));
    const updated = [...newRecords, ...current];
    setStoredData('attendance', updated);
    return updated;
  },

  // Test Results
  getTestResults: (): TestResult[] => {
    return getStoredData('test_results', INITIAL_TEST_RESULTS);
  },
  addTestResult: (res: Omit<TestResult, 'id' | 'percentage'>): TestResult => {
    const current = getStoredData<TestResult[]>('test_results', INITIAL_TEST_RESULTS);
    const percentage = Math.round((res.marksObtained / res.maxMarks) * 100);
    const newResult: TestResult = {
      ...res,
      id: `test-${Date.now()}`,
      percentage,
    };
    const updated = [newResult, ...current];
    setStoredData('test_results', updated);
    return newResult;
  },

  // Testimonials
  getTestimonials: (): Testimonial[] => {
    return getStoredData('testimonials', INITIAL_TESTIMONIALS);
  },

  // Announcements
  getAnnouncements: (): Announcement[] => {
    return getStoredData('announcements', INITIAL_ANNOUNCEMENTS);
  },

  // Study Materials
  getStudyMaterials: (): StudyMaterial[] => {
    return getStoredData('study_materials', INITIAL_STUDY_MATERIALS);
  },
};
