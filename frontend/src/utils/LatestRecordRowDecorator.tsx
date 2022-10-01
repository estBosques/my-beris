export interface decoratorProperty {
  [key: string]: string;
}
export interface recordDecorator {
  [key: string]: decoratorProperty;
}

export const decorators: recordDecorator = {
  income: {
    borderColor: "border-green-600",
    rowBg: "bg-green-100",
    pillBg: "bg-green-600",
    pillText: "text-black",
  },
  expense: {
    borderColor: "border-red-600",
    rowBg: "bg-red-100",
    pillBg: "bg-red-600",
    pillText: "text-white",
  },
};