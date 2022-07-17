export interface School {
  id: String;
  info: Info;
  teachers: [Teacher];
  students: [Student];
  classrooms: [ClassRoom];
  courses: [Courses];
}

export type Info = { name: String; location: String };

export type Teacher = {
  id: String;
  name: String;
  courses: [String];
  status: Boolean;
};

export type Student = {
  id: String;
  name: String;
  studentCourses: [String];
  status: Boolean;
  payment: [StudentPayment];
};

export type StudentPayment = { id: String; status: Boolean };

export type ClassRoom = {
  id: String;
  name: String;
  status: Boolean;
  state: Boolean;
};

export type Course = {
  id: String;
  name: String;
  teacher: String;
  students: [String];
};

export type Courses = [Course];
