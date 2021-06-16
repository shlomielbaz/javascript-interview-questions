// JavaScript program to check if given array
// has 2 elements whose sum is equal
// to the given value

// Javascript implementation using Hashing

	function printpairs(arr, sum)
	{
		let s = new Set();
		for (let i = 0; i < arr.length; ++i)
		{
			let temp = sum - arr[i];

			// checking for condition
			if (s.has(temp)) {
				document.write(
					"Pair with given sum "
					+ sum + " is (" + arr[i]
					+ ", " + temp + ")");
			}
			s.add(arr[i]);
		}
	}

// Driver Code

		let A = [ 1, 4, 45, 6, 10, 8 ];
		let n = 50;
		printpairs(A, n);
