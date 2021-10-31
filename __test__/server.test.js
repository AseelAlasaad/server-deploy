'use strict';

const {app}=require('../server');
const supertest=require('supertest');
const { TestWatcher } = require('@jest/core');
const request=supertest(app);

describe('API Server Testing',()=>{
    test('handel invalid URLs', async()=>{
        const response =await request.get('/not-found');
        expect(response.status).toEqual(404);
    });

    test('/data works', async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); // checking the type of th response 
    
      });

})