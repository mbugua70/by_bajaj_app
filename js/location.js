const placeholderElement = document.getElementById("plaholder_id");
const checkedElement = document.getElementById("checked_id");

$(function () {
  const $btnLocation = $("#btn_location");
  const btnLoca = document.querySelector("#btn_location");
  $btnLocation.on("click", function (e) {
    e.preventDefault();

    if (navigator.geolocation) {
      var shouldProceed = true;
      navigator.geolocation.getCurrentPosition(showPosition, locationError);
    } else {
      appLocationNotifier("Sorry we can't locate your locacation");
      shouldProceed = false;
    }
  });

  const showPosition = (position) => {
    $("#preloader_one").css("display", "inline-block");
    setTimeout(() => {
      $("#sub_1_26").val(position.coords.longitude);
      $("#sub_1_27").val(position.coords.latitude);
      const longitude = document.getElementById("sub_1_26").value;
      const latitude = document.getElementById("sub_1_27").value;

      // changin location image
      if (
        position.coords.latitude == latitude &&
        position.coords.longitude == longitude
      ) {
        placeholderElement.style.display = "none";
        checkedElement.style.display = "block";
      } else {
        placeholderElement.style.display = "block";
        checkedElement.style.display = "none";
      }

      btnLoca.textContent = "";
      $btnLocation.append('<i class="material-icons location_icon">check</i>');
    }, 2000);
  };

  const locationError = () => {
    swal({
      title: "Unable to retrieve your location!",
      text: "",
      icon: "error",
    });
  };

  locationStore = window.localStorage;
  // const checkLocation = () => {
  //   longitude = flashStore.getItem("longitude");
  //   latitude = flashStore.getItem("latitude");
  //   if (!longitude && !latitude) {
  //     btnLoca.textContent = "LOADED";
  //     $btnLocation.append('<i class="material-icons location_icon">check</i>');
  //   }
  // };
});
