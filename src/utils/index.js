function isValidNepalPhoneNumber(val) {
    if (
      val.length === 10 &&
      !["3", "7", "9"].includes(val.substr(2, 1)) &&
      !isNaN(+val) &&
      (val.substr(0, 2) === "98" || val.substr(0, 2) === "97")
    )
      return true;
    return false;
  }

  const isMobile = () => {
    return (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
      false
    );
  };
  export {
    isValidNepalPhoneNumber,isMobile
  }