import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { sql } from "../db";

const initialState = {
  medics: [],
  categories: [],
  loading: false,
  error: null,

}

const stockSlice = createSlice({
  initialState,
  name: "stock",
  reducer:{},
  extraReducers:builder => {
    builder.addCase(fetchStock.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchStock.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload.categories;
      state.medics = action.payload.medics;
    })
    builder.addCase(fetchStock.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
})


export const fetchStock = createAsyncThunk("stock/fetchStock", async (_,thunk) => {
  try {
    const medics = await sql("all", "SELECT * FROM medicaments")
    const categories = await sql("all", "SELECT * FROM categories")
    return {
      medics,
      categories
    };
  }catch(e){
    return thunk.rejectWithValue(e.message)
  }
});

export const getCategoryName = (categories, categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : "Inconnue";
};


export default stockSlice.reducer

