// Javascript

const wereWolf = (name, role) => {
	role = role.toLowerCase()

	if (!name) {
		return 'Nama harus di isi!'
	}
	if (role === 'penyihir' || role === 'guard' || role === 'werewolf') {
		return `Name: ${name} | Role : ${role}`
	}

	return 'Pilih Peranmu untuk memulai game: penyihir|guard|werewolf'
}

// console.log(wereWolf('Jhon', 'guard'))
// console.log(wereWolf('Jhon', 'Penyihir'))
// console.log(wereWolf('Jhon', 'fox'))
