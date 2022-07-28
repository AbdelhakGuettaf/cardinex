import React from "react";
import { Classroom } from "../components/Classroom/Classroom";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Canvas, Meta, Story } from "@storybook/addon-docs";
export default {
  title: "Components/ClassRoom",
  component: Classroom,
  args: {
    name: "Test Room",
    badge: false,
    capacity: 12,
    students: 5,
    courseName: "Test Course",
    state: true,
    status: true,
  },
} as ComponentMeta<typeof Classroom>;

export const Template: ComponentStory<typeof Classroom> = (args) => {
  return <Classroom {...args}></Classroom>;
};

export const InactiveClassroom = Template.bind({});
InactiveClassroom.args = {
  courseName: "Course",
  students: 2,
  capacity: 15,
  name: "TestRoom",
  state: false,
  status: true,
  badge: false,
};
export const ActiveClassroom = Template.bind({});
ActiveClassroom.args = {
  courseName: "Course",
  students: 4,
  capacity: 3,
  name: "TestRoom",
  state: true,
  status: true,
  badge: false,
};
export const ClassroomWithBadge = Template.bind({});
ClassroomWithBadge.args = {
  courseName: "Course",
  students: 4,
  capacity: 3,
  name: "TestRoom",
  state: true,
  status: true,
  badge: true,
};
