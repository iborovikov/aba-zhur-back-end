import {User} from '../../models/index.mjs'


const logout = async (req, res) => {
  const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: null });
    
  res.status(204).json({
    status: "success",
    code: 204,
    message: "User logout",
  });
};

export default logout;