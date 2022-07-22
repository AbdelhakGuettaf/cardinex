export interface School {
  id: string;
  info: Info;
  teachers: Teacher[];
  students: Student[];
  classrooms: ClassRoom[];
  courses: Courses[];
}

export type Info = { name: string; location: string };

export type Teacher = {
  id: string;
  name: string;
  courses: string[];
  status: boolean;
};

export type Student = {
  id: string;
  name: string;
  studentCourses: string[];
  status: boolean;
  payment: [StudentPayment];
};

export type StudentPayment = { id: string; status: boolean };

export type ClassRoom = {
  id: string;
  name: string;
  capacity: number;
  status: boolean;
  state: boolean;
};

export type Course = {
  id: string;
  name: string;
  teacher: string;
  students: string[];
};

export type Courses = [Course];
