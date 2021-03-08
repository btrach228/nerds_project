const rangeSlider = document.getElementById("range_slider");

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 15000],
    connect: true,
    range: {
      min: [0],
      max: [15000],
    },
  });

  const input_1 = document.getElementById("input_1");
  const input_2 = document.getElementById("input_2");
  const inputs = [input_1, input_2];

  rangeSlider.noUiSlider.on("update", function (values, handle) {
    try {
      inputs[handle].value = Math.floor(values[handle]);
    } catch {
      console.log("NaN");
    }
  });

  const setNumSlider = function (x, value) {
    let arr = [null, null];
    arr[x] = value;
    rangeSlider.noUiSlider.set(arr);
  };
  inputs.forEach((item, index) => {
    item.addEventListener("change", (e) => {
      setNumSlider(index, e.currentTarget.value);
    });
  });
}
