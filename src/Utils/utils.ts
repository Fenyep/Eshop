export const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return {
        year: year,
        month: month,
        day: day,
        date: `${year}-${month}-${day}`
    } ;
}

export const monthOptions = [
    { value:"01", label: "January"},
    { value:"02", label: "February"},
    { value:"03", label: "March"},
    { value:"04", label: "April"},
    { value:"05", label: "May"},
    { value:"06", label: "June"},
    { value:"07", label: "July"},
    { value:"08", label: "August"},
    { value:"09", label: "September"},
    { value:"10", label: "October"},
    { value:"11", label: "November"},
    { value:"12", label: "December"},
];

const currentYear = new Date().getFullYear();
export const yearOptions = Array.from({ length: 20 }, (_, index) => {
  const year = currentYear - index;
  return { value: String(year), label: String(year) };
});