//change the objects accordingly

'use strict'

var express = require('express')
var todoRoutes = express.Router()
var todo = require('./todo')

//get all todo items in the DB
todoRoutes.route('/all').get(function (req, res, next){
    todo.find(function (err, todos) {
        if (err) {
            return next(new Error(err))
        }
        
        res.json(todos)
          //return all todos
    })
})


//add a todo item
todoRoutes.route('/add').post(function (req, res) {
    todo.create(
        {
            name : req.body.name,
            done : false
        },

        function (error, todo){
            if(error) {
                res.status(400).send('Unable to create list')
            }

            res.status(200).json(todo)
        }
    )    
})


//delete a todo item
todoRoutes.route('/delete:id').get(function (req, res, next){
    var id = req.params.id
    todo.findByIdAndRemove(id, function (err, todo) {
        if(err) {
            return next(new Error('Todo was not found'))
        }

        res.json('Removed')
    })
})

//update a todo item
todoRoutes.route('/update:id').post(function (req, res, next){

        todo.findById(req.params.id, function(err, todo){
        if(err) {
            return next(new Error('Todo was not found'))
        }
        else {
            todo.name = req.body.name
            todo.done = req.body.done

            todo.save({
                function (err, todo){
                    if(err) {
                        res.status(400).send('Unable to update')
                    }
                    else {
                        res.status(200).json(todo)
                    }
                }
            })
        }
    })
})

module.exports = todoRoutes;
