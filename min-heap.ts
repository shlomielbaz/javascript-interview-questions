/*

מצא את ה־k הגדול ביותר ברשימה ממוין חלקית (הסבר איך תבחר בין heap / sort).


כדי למצוא את ה־k הגדול ביותר ברשימה ממוין חלקית (partial sorted), צריך קודם להבין מה המצב של הרשימה ואז לבחור בין שימוש ב־heap או ב־sort מלא. בוא נעבור שלב־שלב:

1️⃣ מצב הרשימה

נניח שיש לנו רשימה arr שאינה מסודרת לגמרי, אבל אולי חלקית מסודרת (למשל, כל איבר קרוב למקומו הסופי או שיש חלק מהאיברים כבר ממוינים). המטרה שלנו היא למצוא את ה־k הגדול ביותר.

2️⃣ שתי גישות אפשריות
א) מיון מלא (sort)

אפשר למיין את הרשימה ואז לקחת את האיבר במקום len(arr) - k (או slice של k הגדולים).

סיבוכיות זמן: O(n log n)

מתאים אם: הרשימה קטנה או אם רוצים גם כל הקיבוץ הממויין של k הגדול ביותר.

ב) שימוש ב־heap קטן (min-heap בגודל k)

יוצרים min-heap בגודל k שמכיל את k האיברים הגדולים ביותר שנמצאו עד כה.

עבור כל איבר ברשימה:

אם האיבר גדול יותר מהשורש של ה־heap, מחליפים אותו.

בסוף, השורש של ה־heap הוא ה־k הגדול ביותר.

סיבוכיות זמן: O(n log k),

שימוש בזיכרון: O(k)

מתאים אם: k קטן יחסית ל־n, או הרשימה גדולה מאוד כך שמיון מלא יקר מדי.

  */


class MinHeap {
    heap: number[] = [];

    constructor(private capacity: number) {}

    push(val: number) {
        if (this.heap.length < this.capacity) {
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        } else if (val > this.heap[0]) {
            this.heap[0] = val;
            this.bubbleDown(0);
        }
    }

    top(): number {
        return this.heap[0];
    }

    private bubbleUp(index: number) {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index] < this.heap[parent]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    private bubbleDown(index: number) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.bubbleDown(smallest);
        }
    }
}

function kthLargest(arr: number[], k: number): number {
    const heap = new MinHeap(k);
    for (const num of arr) heap.push(num);
    return heap.top();
}

// דוגמה
console.log(kthLargest([3,1,5,12,2,11], 3)); // 5
