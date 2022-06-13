const slugify = require('slugify');
const Blogs = require('../models/blog.model');
const { v4: uuidv4 } = require('uuid');
//บันทึกข้อมูลลงฐานข้อมูล
exports.create = (req, res) => {
    const { title, description, auther } = req.body;
    let slug = slugify(title);// กันชื่อซ้ำ

    if(!slug) slug = uuidv4();

    //ตรวจสอบความถูกต้องของข้อมูล
    if (!title || !description || !auther) {
        return res.status(400).send({
            message: 'กรุณากรอกข้อมูลให้ครบถ้วน'
        });
    }
    //ส่งผลลัพธ์กลับไปยังหน้าจอ บทความซ้ำ
    Blogs.create({
        title,
        description,
        auther,
        slug
    },(err, blog) => {
        if(err){
            res.status(400).json({message: "ชื่อโพสต์นี้มีอยู่แล้ว"});
        }
        res.json(blog); 
    })
}

//ดึงข้อมูลจากฐานข้อมูลทโพสทั้งหมด
exports.getAllblogs = (req, res) => {
    Blogs.find({}).exec((err, blogs) => {
        if(err){
            res.status(400).json({message: "ไม่พบข้อมูล"});
        }
        res.json(blogs);
    })
}

exports.post = (req, res) => {
    const slug = req.params.slug;
    Blogs.findOne({slug}).exec((err, blog) => {
        if(err){
            res.status(400).json({message: "ไม่พบข้อมูล"});
        }
        res.json(blog);
    })
}