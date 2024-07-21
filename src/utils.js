// src/utils.js
export const formatCost = (cost) => {
    if (typeof cost === 'number') {
      return cost.toFixed(2);
    } else if (typeof cost === 'string') {
      const numericCost = parseFloat(cost.replace(/[^0-9.]/g, ''));
      return isNaN(numericCost) ? '0.00' : numericCost.toFixed(2);
    } else {
      console.warn('Unexpected type for cost:', typeof cost);
      return '0.00';
    }
  };
  