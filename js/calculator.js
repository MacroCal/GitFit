<script></script>


function calculateCalorie(obj)
{
    const age = obj.form.age.value;
    // const gender = obj.form.gender.value;
    // const bodyFat = obj.form.bodyFat.value;
    // const height = obj.form.height.value;
    const weight = obj.form.weight.value;
    const activity = obj.form.activity.value;
    const unit = obj.form.unit.value;
    const formula = obj.form.formula.value;

    let calories = '';
    if(formula == 0) // Mifflin
    {
        calories = Mifflin (age, weight);
    }
    else if(formula == 1) // Harris
    {
        calories= Harris(age, weight);
    }
    else if(formula == 2) // Katch
    {
        calories = Katch(weight);
    }

    let ret = parseFloat(calories)*parseFloat(activity);
    if(unit == 'kilojoules')
    {
        ret = (ret*4.1868);
    }

    document.querySelector(".ans_calculate").innerHTML = '<div class="container"><h4 class="text-center form-control my-3 text-danger fs-4">You should consume <span class="text-white">'+Math.ceil(ret)+' '+unit+'/day </span> of calorie to maintain your weight.</h4></div>';
}

function Mifflin(age, weight)
{
    let calories = (10*weight) - (5*age) + 5;
    // if(gender == 1) // Female
    {
        calories = (10*weight) - (5*age) - 161;
    }

    return calories;
}

function Harris(gender, age, weight)
{
    let calories = (13.397*weight) - (5.677*age) + 88.362;
    // if(gender == 1) // Female
    {
        calories = (9.247*weight) - (4.330*age) + 447.593;
    }

    return calories;
}

function Katch(weight)
{
    let calories = 370 + 21.6*weight;

    return calories;
}

