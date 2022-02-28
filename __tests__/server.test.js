"use strict";

const { app } = require('../src/server');
const supertest = require("supertest");
const request = supertest(app);

let id;


describe('Testing 404', () => {
    test('testing/clothes', async () => {
        const response = await request.get('/fakePath');
        expect(response.status).toBe(404);
    });
    test('testing bad method', async () => {
        const response = await request.put('/clothes');
        expect(response.status).toBe(404);
    });
});
describe('testing food routes', () => {
    
    it('testing get all food', async () => {
        const response = await request.get('/food')
        console.log(response);
        expect(response.status).toEqual(200)
        
    })
    it('post new food', async () => {
        const response = await request.post('/food').send({
            foodName: "test",
            dishSize: "L"
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });
    it('testing food get by id method', async () => {
        const response = await request.get(`/food/${id}`)
        expect(response.status).toEqual(200);
    })
    it('update new food', async () => {
        const response = await request.put(`/food/${id}`).send({
          foodName: "test",
          dishSize: 0
        })
        expect(response.status).toEqual(201);
    });
    it('deleting food by id', async () => {
        const response = await request.delete(`/food/${id}`)
        expect(response.status).toEqual(204);
    })
})


describe('testing clothes routes', () => {
 
    it('testing get all clothes', async () => {
        
        const response = await request.get('/clothes')
        expect(response.status).toEqual(200)
    })
    it('post new clothes', async () => {
        const response = await request.post('/clothes').send({
          clothesName: "test",
          clothesSize: "L"
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });

    it('testing clothes get by id method', async () => {
        const response = await request.get(`/clothes/${id}`)
        expect(response.status).toEqual(200);
    })
    it('update new clothes', async () => {
        const response = await request.put(`/clothes/${id}`).send({
          clothesName: "test",
          clothesSize: "5"
        })
        expect(response.status).toEqual(201);
    })
    it('deleting clothes by id', async () => {
        const response = await request.delete(`/clothes/${id}`)
        expect(response.status).toEqual(204)
    })
})
