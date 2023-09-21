class MCMException extends Error {}
// El tipo de dato siempre es numérico + 
// Debe de ser números naturales. +
// Nunca debe de ser Negativo. +
// Nunca debe de irracional o fraccionario +
export function mcm (...products) {
	try {
		// Deteción de errores de inserciones de datos:
		if(products.length >= 1) {
			for (let product of products) {
				if(typeof product !== "number" || product < 1 || product.toString().indexOf(".") !== -1) 
					throw new MCMException(`Los datos introducidos deben ser números naturales, "${product}" no es un número natural porque ${product} no pertenece al conjunto de los números naturales {1,2,3,...,n}.`);
				if(Number.isNaN(product))
					throw new MCMException(`El tipo de dato ${product} no es un número. Los valores deben de ser números naturales.`)
			}
		}

		if(products.length == 0) return null;
		else if(products.length == 1) 
			return products[0];
		else {
			// Aquí defino el producto máximo.
			let productTotal = 1; products.forEach(el=> productTotal*= el);
			const divisors = [];

			for (let divisor = 2; divisor <= productTotal; divisor++) {
				let isDivisor = false;
				let one = 1; products.forEach(el=> one*= el);
				for (let product of products) {
					let cosiente = product/divisor;
					if(cosiente.toString().indexOf(".") === -1) {
						isDivisor = true;
						break;
					}
				}
				if(isDivisor) {
					function setDivisor () {
						isDivisor = false;
						divisors.push(divisor);
						for (let index = 0; index < products.length; index++) {
							let cosiente = products[index]/divisor;
							if(cosiente.toString().indexOf(".") === -1) {
								products[index] = cosiente;
								if((cosiente/divisor).toString().indexOf(".") === -1) isDivisor = true;
							}
						}
						if(isDivisor) setDivisor();
					}
					setDivisor();
				}

				else if (one === 1) {
					let doneMcm = 1; divisors.forEach(el=> doneMcm*=el);
					return doneMcm;
				}
				
			}
		}
	}
	catch (error) { return error; }
}