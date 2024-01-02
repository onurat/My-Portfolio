// Filters
const filter_var_1 = "filter-var1";
const filter_var_2 = "filter-var2";
const filter_var_3 = "filter-var3";

const filters = [filter_var_1, filter_var_2, filter_var_3];

const generateFilterString = (...fils) => {
  return Array.from(fils).join(" ");
};

// URL Types
// Category Types
const cat_types = {
  [filter_var_1]: "Cat 1",
  [filter_var_2]: "Cat 2",
  [filter_var_3]: "Cat 3",
};

// Projects
const projects = [];

// Get Details
const getDetails = (id) => {
  if (!id || id < 0 || id >= projects.length) return projects[0];

  const pr = projects[id];
  let fils_ = pr.filter.split(" ");
  let cats_ = [];
  fils_.forEach((el) => {
    cats_ = [...cats_, cat_types[el]];
  });
  let cat = cats_.join(", ");
  pr["category"] = cat;

  return pr;
};

export default { filters, projects, getDetails };
