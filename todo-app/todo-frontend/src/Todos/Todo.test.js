import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("<Todo />", () => {
  let component;

  const todo = {
    _id: "1",
    text: "test todo",
    done: false,
  };

  const deleteMock = jest.fn();
  const setDoneMock = jest.fn();

  component = render(<Todo todo={todo} onClickDelete={deleteMock} onClickComplete={setDoneMock} />);

  test("should show right content on todo", () => {
    expect(component.container).toHaveTextContent("test todo");
    expect(component.container).toHaveTextContent("This todo is not done");
    expect(component.container).toHaveTextContent("Delete");
    expect(component.container).toHaveTextContent("Set as done");
  });
});
