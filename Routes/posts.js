const express = require('express')

const router = express.Router() ;

const Post = require('../models/Post');

//GETS BACK ALL THE POSTS
router.get('/',async(req,res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message : err})
    }
})

//SUBMITS A POST
router.get('/specific',(req,res) =>{
    res.send('We are on a Specific Post .............!!!!');
})


router.post('/new',async(req,res) =>{
    console.log(req.body);
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });
   try{ 
    const savedPost= await post.save()
    res.json(savedPost);
   }
   catch(err){
       res.json({message : err});
   }
});

//GETS A SPECIFIC POST
router.get('/:postID', async(req,res)=>{
    console.log(req.params.postID);
    try{
    const post =  await Post.findById(req.params.postID);
    res.json(post);
    } 
    catch(err){
        json({message : err})
}
})
//DELETES A SPECIFIC POST
router.delete('/:postID', async(req,res)=>{
    console.log(req.params.postID);
    try{
        const removedPost = await Post.remove({_id : req.params.postID})
        res.send('<h1>Post deleted</h1>');
    } 
    catch(err){
        json({message : err})
}
})

//UPDATE A SPECIFIC POST
router.patch('/:postID', async(req,res)=>{
    console.log(req.params.postID);
    try{
        const updatePost = await Post.updateOne({_id : req.params.postID},
                                                {$set :{title:req.body.title}}
                                                );
    }
    catch(err){
        res.json({message:err});
    }
})

module.exports = router ;