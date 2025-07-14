// Complete set of stress questions in Bahasa Malaysia
const stressQuestions = [
    {
        category: "Akademik",
        questions: [
            "Saya berasa terbeban dengan jumlah kerja sekolah/universiti.",
            "Saya sering bimbang tentang keputusan peperiksaan.",
            "Saya sukar untuk mengimbangi masa antara akademik dan kehidupan peribadi.",
            "Saya berasa tidak cukup persediaan untuk menghadapi peperiksaan."
        ]
    },
    {
        category: "Sosial",
        questions: [
            "Saya berasa sukar untuk menyesuaikan diri dengan rakan sebaya.",
            "Saya sering berasa terasing dalam kumpulan sosial.",
            "Saya bimbang tentang apa yang orang lain fikirkan tentang saya.",
            "Saya mengalami kesukaran untuk membuat kawan baru."
        ]
    },
    {
        category: "Keluarga",
        questions: [
            "Saya mengalami konflik dengan ahli keluarga.",
            "Masalah kewangan keluarga memberi tekanan kepada saya.",
            "Saya berasa tidak mendapat sokongan yang cukup dari keluarga.",
            "Saya bimbang tentang keadaan kesihatan ahli keluarga."
        ]
    },
    {
        category: "Kesihatan",
        questions: [
            "Saya sering berasa letih tanpa sebab yang jelas.",
            "Saya mengalami masalah tidur (sukar tidur, kerap terjaga).",
            "Saya sering mengalami sakit kepala atau sakit badan.",
            "Saya mempunyai selera makan yang tidak menentu (terlalu banyak atau terlalu sedikit)."
        ]
    },
    {
        category: "Emosi",
        questions: [
            "Saya mudah marah atau kecewa dengan perkara kecil.",
            "Saya sering berasa sedih atau tidak bermotivasi.",
            "Saya sukar untuk menumpukan perhatian atau membuat keputusan.",
            "Saya berasa tidak berdaya atau putus asa tentang masa depan."
        ]
    }
];

// Function to generate stress checker form (could be used if dynamically generating the form)
function generateStressForm() {
    let formHTML = '';
    
    stressQuestions.forEach((category, catIndex) => {
        formHTML += `<div class="form-group"><h3>Bahagian ${catIndex + 1}: ${category.category}</h3>`;
        
        category.questions.forEach((question, qIndex) => {
            const questionNum = catIndex * 4 + qIndex + 1;
            formHTML += `
                <div class="question">
                    <p>${questionNum}. ${question}</p>
                    <div class="likert-scale">
                        <label><input type="radio" name="q${questionNum}" value="1"> 1 (Sangat Tidak Setuju)</label>
                        <label><input type="radio" name="q${questionNum}" value="2"> 2</label>
                        <label><input type="radio" name="q${questionNum}" value="3"> 3</label>
                        <label><input type="radio" name="q${questionNum}" value="4"> 4</label>
                        <label><input type="radio" name="q${questionNum}" value="5"> 5 (Sangat Setuju)</label>
                    </div>
                </div>
            `;
        });
        
        formHTML += '</div>';
    });
    
    return formHTML;
}