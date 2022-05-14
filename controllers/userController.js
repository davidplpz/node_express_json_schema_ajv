class userController {
  signup = (request, response, next) => {
    response.json("User signup completed");
  };
}

const UserController = new userController();

export default UserController;
