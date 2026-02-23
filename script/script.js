// Variable declaration
let interviewList= [];
let rejectedList= [];
let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('allCards');

const mainContainer = document.querySelector('main');
console.log(mainContainer);
// Counting function
function calTotalCount(){
    total.innerText = allCardSection.children.length
    interviewList.innerText = interviewList.length
    rejectedList.innerText = rejectedList.length
}
calTotalCount()
// Button toggle function
function toggleStyle(id){
    allFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    allFilterBtn.classList.add('bg-white','text-black','border-gray-300', 'hover:bg-gray-100')
    interviewFilterBtn.classList.add('bg-white','text-black','border-gray-300', 'hover:bg-gray-100')
    rejectedFilterBtn.classList.add('bg-white','text-black','border-gray-300', 'hover:bg-gray-100')
    
    const selected = document.getElementById(id);
    selected.classList.remove('bg-white','text-black','border-gray-300', 'hover:bg-gray-100')
    selected.classList.add('bg-[#3B82F6]','text-white')

}

mainContainer.addEventListener('click',function(event){
    // console.log(event.target.parentNode.parentNode);
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText
    const jobTittle = parentNode.querySelector('.jobTittle').innerText
    const salary = parentNode.querySelector('.salary').innerText
    const statusBtn = parentNode.querySelector('.status-btn').innerText
    const jobDetails = parentNode.querySelector('.jobDetails').innerText

    const cardInfo = {
        companyName,
        jobTittle,
        salary,
        statusBtn,
        jobDetails
    }
    const companyExist = interviewList.find(item=> item.companyName == cardInfo.companyName)
    if(!companyExist){
        interviewList.push(cardInfo)
    }
})