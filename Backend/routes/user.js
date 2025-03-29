const { Router } = require("express");
const router = Router();
const verifyJwt = require("../middleware/authUser.middleware")
const { signin ,
        signup ,
        logout,
        myCourses,
        isLoggedin,
        returnMe,
        editUserProfile,
        updateUserAvatar,
        lastWatched } = require("../controllers/user.controller");

const { viewCourse } = require("../controllers/course.controller");
const {upload} = require('../middleware/multer');

router.put('/editProfile', verifyJwt, editUserProfile);

router.put('/updateAvatar',verifyJwt, upload.single('avatar'), updateUserAvatar);

router.get('/me', verifyJwt, returnMe);

router.post('/signup', upload.single("avatar"), signup);

router.post('/signin', signin);

router.post('/logout', verifyJwt, logout);

router.get('/myCourses',verifyJwt , myCourses);

router.get('/myCourses/:courseId' , viewCourse);
   
router.get("/loggedin",isLoggedin)

router.get("/lastWatched",verifyJwt,lastWatched)

module.exports = router;

module.exports = router