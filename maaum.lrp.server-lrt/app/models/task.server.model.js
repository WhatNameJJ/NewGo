'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ResourceSchema = new Schema({
    name: {
        type: String
    },
<<<<<<< HEAD
=======
    /* 리소스 타입. */
>>>>>>> 24a093b078937ef9a0d02fb34ef1cddd036cbaad
    resType: {
        type: String,
        enum: ['str', 'file', 'bool', 'video']
    },
    strType: {
        type: String,
        enum: ['text', 'textarea']
    },
    value: {
        type: String
    },
<<<<<<< HEAD
    timeout: { // 이미지 과제에서 자동으로 넘어가는 시간
=======
    timeout: { // 이미지 과제에서 자동으로 넘어가는 시간.
>>>>>>> 24a093b078937ef9a0d02fb34ef1cddd036cbaad
        type: Number,
        default: -1
    },
    imageOrientation: { // 이미지 과제에서 최초 표시 시 좌-우-중앙 위치 설정
        type: String,
        enum: ['left', 'right', 'center']
    },
    height: {
        type: Number
    },
    width: {
        type: Number
    },
    isAnswer: {
        type: Boolean,
        default: false
    },
    isDefinition: {
        type: Boolean,
        default: false
    },
    note: {
        type: String
    }
});

<<<<<<< HEAD
/**
 * Task Schema
 */
var TaskSchema = new Schema( {
    /*
=======
/*
 * Task Schema
 */
var TaskSchema = new Schema({
>>>>>>> 24a093b078937ef9a0d02fb34ef1cddd036cbaad
    category: {
        type: String,
        trim: true,
        required: [true, '과제 유형을 입력해 주십시오.'],
    },
<<<<<<< HEAD
    */

   category: {
        type: Schema.ObjectId,
        ref: 'MyTaskCategory'
    },
    
=======
>>>>>>> 24a093b078937ef9a0d02fb34ef1cddd036cbaad
    name: {
        type: String,
        default: '',
        required: [true, '과제명을 입력해 주십시오.'],
        trim: true
    },
    answer: {
        type: String,
        enum: ['select', 'record', 'draw-one', 'draw-two', 'manual', 'manual_now', 'same', 'pick15', 'ray', 'forms', 'visual30', 'visual34', 'sound', 'pick08','draw-one2']
    },
<<<<<<< HEAD
=======
    
>>>>>>> 24a093b078937ef9a0d02fb34ef1cddd036cbaad
    isRandom: {
        type: Boolean
    },
    numOfProblem: {
        type: Number
    },
    score_type: {
        type: String,
        default: 'n/a'
    },
    max_score: {
        type: Number
    },
<<<<<<< HEAD

    preview: { // 사진!!
=======
    preview: {
>>>>>>> 24a093b078937ef9a0d02fb34ef1cddd036cbaad
        type: String
    },
    resources: [ResourceSchema],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    updated: {
        type: Date
    },
<<<<<<< HEAD
=======
    
>>>>>>> 24a093b078937ef9a0d02fb34ef1cddd036cbaad
    created: {
        type: Date,
        default: Date.now
    },
<<<<<<< HEAD
    sortOrder: Number,
    setSize: Number,
    isOpen: Boolean,
    center: {
        type: Schema.ObjectId,
        ref: 'Center'
    }

    // 2018.08.07 추가.
    , taskType : { 
        type: String        
        // , enum: ['LT', 'RT', 'LRE']
    } 

});


=======

    sortOrder: Number,
    setSize: Number,
    isOpen: Boolean,
    
    center: {
        type: Schema.ObjectId,
        ref: 'Center'
    },
    
    type: {
        type: String,
        enum: ['LRT', 'LT']
    }
});

// 문제구성
>>>>>>> 24a093b078937ef9a0d02fb34ef1cddd036cbaad
var ProblemSchema = new Schema({
    name: {
        type: Number,
        required: [true, '문항 세트 ID를 입력해 주십시오.']
    },
<<<<<<< HEAD

=======
>>>>>>> 24a093b078937ef9a0d02fb34ef1cddd036cbaad
    refTask: {
        type: Schema.ObjectId,
        ref: 'Task',
        required: [true, '과제를 선택해 주십시오.']
    },
<<<<<<< HEAD

    // 원레 있던거.
    taskCategory: {
        type: String
    },

=======
    taskCategory: {
        type: String
    },
>>>>>>> 24a093b078937ef9a0d02fb34ef1cddd036cbaad
    taskName: {
        type: String
    },
    same: {
        type: Boolean
    },
    level: { // legacy
        type: Number
    },
    practice: {
        type: Boolean
    },
    seq: {
        type: Number,
        required: [true, '문제 순서를 입력해 주십시오.']
    },
    note: {
        type: String
    },
    resources: [ResourceSchema],
    def: [ResourceSchema],
    res: [ResourceSchema],
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    updated: {
        type: Date
    }
<<<<<<< HEAD
    
    // 2018.08.07 추가.
    , taskType : { 
        type: String        
        // , enum: ['LT', 'RT', 'LRE']
    } 
=======
>>>>>>> 24a093b078937ef9a0d02fb34ef1cddd036cbaad
});

mongoose.model('Problem', ProblemSchema);
mongoose.model('Task', TaskSchema);
<<<<<<< HEAD

// problems, tasks 로 바뀐당.
=======
>>>>>>> 24a093b078937ef9a0d02fb34ef1cddd036cbaad
