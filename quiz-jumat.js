const maxMin = (arr) => {
	const max = Math.max.apply(null, arr)
	const min = Math.min.apply(null, arr)

	return `Angka terbesar ${max}, angka terkecil ${min}`
}

// console.log(maxMin([5, 4, 9, 10, 60]))
// console.log(maxMin([5, 4, 9, 10, 100]))
// console.log(maxMin([5, 4, 1, 10, 60, 100, 600]))
