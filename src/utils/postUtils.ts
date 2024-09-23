export const getPostColorFromCategory = (category: string) => {
  switch (category) {
    case "Innovation":
      return "cyan";
    case "Security":
      return "violet";
    case "Sustainability":
      return "lime";
    default:
      return "fuchsia";
  }
};

export const getTypeColorFromPosition = (type: string) => {
  switch (type) {
    case "Full Time":
      return "cyan";
    case "Part Time":
      return "violet";
    case "Contract":
      return "lime";
    default:
      return "fuchsia";
  }
};

export const getCategoryColorFromPosition = (category: string) => {
  switch (category) {
    case "Engineering":
      return "cyan";
    case "Product":
      return "violet";
    case "Marketing":
      return "lime";
    default:
      return "fuchsia";
  }
};
