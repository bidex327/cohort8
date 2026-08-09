function loadUserData(userId) {
  console.log("starting to load data");
  try {
    if (userId <= 0) {
      throw new Error("User Id must be greater than 0");
    }
    console.log("Data loaded for user", userId);
  } catch (error) {
    console.log("failed", error.message);
  } finally {
    console.log("loading complete. continue connection");
  }
}

loadUserData(5);

function registerStudent(name, age) {
  try {
    if (!name) {
      throw new Error("name cannot be empty");
    } if (!age){
        throw new Error("Age must be filed")
    }
    console.log("student registered:", name, "age:", age);
  } catch (error) {
    console.log("registration failed", error.message);
  }
}


registerStudent("tunde", );

