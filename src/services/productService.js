

export const getCategories = async () => { 
    const response = await fetch('http://localhost:5555/api/product/category/get-all');
    return response.json();
}

export const getAllProducts = async () => {
    const response = await fetch('http://localhost:5555/api/product/product/get-all');
    return response.json();
}