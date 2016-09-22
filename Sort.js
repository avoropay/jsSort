/**
 * Created by Andrey.Voropay on 9/16/2016.
 */
var ArrayBubble = new Array(25);
var ArraySelection = new Array(25);
var ArrayQuick = new Array(25);
var waitRendering = false;

function fillArray() {
	var index = 0;
	do {
		var rnd = Math.ceil(Math.random() * 100);
		if (ArrayBubble.indexOf(rnd) == -1) {
			ArrayBubble[index] = rnd;
			ArraySelection[index] = rnd;
			ArrayQuick[index] = rnd;
			index++;
		}
	} while (index <= 25);

}

function VisualSwap(A, B, I, J, id) {

	var nodeA = $("#" + id + I),
		nodeB = $("#" + id + J);
	nodeA.toggleClass("barHswop", true);
	nodeB.toggleClass("barHswop", true);

	nodeA.width(B);
	nodeB.width(A);

	nodeA.toggleClass("barHswop", false);
	nodeB.toggleClass("barHswop", false);
}

function BubbleSort(A) {
	var T, I, J, arrayLegnth = A.length;
	for (I = arrayLegnth; I > 0; I--) {
		for (J = 0; J <= arrayLegnth - 1; J++) {
			if (A[J] > A[J + 1]) {
				VisualSwap(A[J], A[J + 1], J, J + 1, "array1_row");
				T = A[J];
				A[J] = A[J + 1];
				A[J + 1] = T;
			}
		}
	}
}

function SelectionSort(A) {
	var I, J, T, arrayLegnth = A.length;
	for (I = 0; I <= arrayLegnth; I++) {
		for (J = arrayLegnth; J >= (I + 1); J--) {
			if (A[I] > A[J]) {
				VisualSwap(A[I], A[J], I, J, "array2_row");
				T = A[I];
				A[I] = A[J];
				A[J] = T;
			}
		}
	}
}

function QuickSort(A, iLo, iHi) {
	var Lo, Hi, Pivot, T;
	Lo = iLo;
	Hi = iHi;
	Pivot = A[(Lo + Hi) / 2 >> 0];
	do {
		while (A[Lo] < Pivot) {
			Lo++;
		}
		while (A[Hi] > Pivot) {
			Hi--;
		}
		if (Lo <= Hi) {
			VisualSwap(A[Lo], A[Hi], Lo, Hi, "array3_row");
			T = A[Lo];
			A[Lo] = A[Hi];
			A[Hi] = T;
			Lo++;
			Hi--;
		}
	} while (Lo <= Hi);
	if (Hi > iLo) {
		QuickSort(A, iLo, Hi);
	}
	if (Lo < iHi) {
		QuickSort(A, Lo, iHi);
	}
}
