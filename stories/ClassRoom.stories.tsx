import { Classroom } from "../components/Classroom/Classroom";
import { ComponentMeta, ComponentStory } from "@storybook/react";
export default {
  title: "ClassRoom",
  component: Classroom,
} as ComponentMeta<typeof Classroom>;

export const Template: ComponentStory<typeof Classroom> = (args) => {
  return <Classroom {...args}></Classroom>;
};

export const InactiveClassroom = Template.bind({});
InactiveClassroom.args = {
  course: {
    id: "111",
    name: "Course",
    students: ["123156", "112345"],
    teacher: "123456",
  },
  capacity: 15,
  id: "123456",
  name: "TestRoom",
  state: false,
  status: true,
};
export const ActiveClassroom = Template.bind({});
ActiveClassroom.args = {
  course: {
    id: "111",
    name: "Course",
    students: ["123156", "112345"],
    teacher: "123456",
  },
  capacity: 3,
  id: "123456",
  name: "TestRoom",
  state: true,
  status: true,
};
