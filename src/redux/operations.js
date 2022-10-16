import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContacts = createAsyncThunk(
   'contacts/fetchAll',
   async (_, thunkAPI) => {
      try {
         const res = await axios.get('/contacts');
         return res.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   });

export const addContact = createAsyncThunk(
   'contacts/add',
   async (newContact, thunkAPI) => {
      try {
         const res = await axios.post('/contacts', newContact);
         return res.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   })

export const deleteContact = createAsyncThunk(
   'contacts/delete',
   async (contactId, thunkAPI) => {
      try {
         const res = await axios.delete(`/contacts/${contactId}`);
         return res.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   })