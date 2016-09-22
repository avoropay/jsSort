/**
 * Created by Andrey.Voropay on 9/16/2016.
 */

$(document).ready(function() {

	$("#randomButton").click(function () {
		fillArray();
		$("#ArrayBubble [id^='array']").each(function (index, item) {
			$(item).width(ArrayBubble[index]);
		});
		$("#ArraySelection [id^='array']").each(function (index, item) {
			$(item).width(ArraySelection[index]);
		});
		$("#ArrayQuick [id^='array']").each(function (index, item) {
			$(item).width(ArrayQuick[index]);
		});
	});

	$("#startButton").click(function () {
		setTimeout(BubbleSort(ArrayBubble), 10);
		setTimeout(SelectionSort(ArraySelection), 10);
		setTimeout(QuickSort(ArrayQuick, 0, ArrayQuick.length-1), 10);
	});
});