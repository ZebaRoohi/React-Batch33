import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchCountries = createAsyncThunk(
	'countries/fetchCountries',
	async () => {
		try {
			const response = await 
				fetch('https://restcountries.com/v3.1/independent?status=true');
			if (!response.ok) {
				throw new Error('Failed to fetch Countries');
			}
			const countries = await response.json();
			return countries;
		} catch (error) {
			throw new Error('Error fetching Countries');
		}
	}
);
const countrySlice = createSlice({
	name: 'countries',
	initialState: {
		data: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCountries.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCountries.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchCountries.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});
export default countrySlice.reducer;