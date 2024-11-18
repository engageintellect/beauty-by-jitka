import botoxImage from '$lib/assets/images/services/botox.png';
import dysportImage from '$lib/assets/images/services/dysport.png';
import juvedermImage from '$lib/assets/images/services/juvederm-vollure-xc.png';
import restylaneContourImage from '$lib/assets/images/services/restylane-contour.png';
import restylaneLyftImage from '$lib/assets/images/services/restylane-lyft.png';
import restylaneRefyneImage from '$lib/assets/images/services/restylane-refyne.png';
import restylaneDefyneImage from '$lib/assets/images/services/restylane-defyne.png';
import stemCellImage from '$lib/assets/images/services/stemcell.png';
import prpImage from '$lib/assets/images/services/prp.png';
import semaglutideImage from '$lib/assets/images/services/semaglutide.png';
import weightLossImage from '$lib/assets/images/services/medical-weight-loss.png';
import juvedermVollureImage from '$lib/assets/images/services/juvederm-vollure.png';

import categoryNeurotoxins from '$lib/assets/images/results/result-30.png';
import categoryDermalFillers from '$lib/assets/images/results/result-29.png';

export const companyInfo = {
	name: 'Beauty by Jitka',
	phone: '9499935222',
	email: 'info@beautybyjitka.com',
	url: 'https://beautybyjitka.com',

	socials: {
		facebook: {
			username: 'beautybyjitka',
			url: 'https://www.facebook.com/beautybyjitka'
		},
		tiktok: {
			username: '@beautybyjitka',
			url: 'https://www.tiktok.com/@beautybyjitka?lang=en'
		},
		instagram: {
			username: '@beautybyjitka',
			url: 'https://instagram.com/beautybyjitka'
		}
	},

	locations: {
		coronaDelMar: {
			address: '2711 East Coast Hwy, Suite #1 Corona Del Mar, CA 92625',
			phone: '+1234567890'
		},

		longBeach: {
			address: '5865 E. Naples Plaza Long Beach, CA 90803',
			phone: '+1234567890'
		}
	}
};

export const serviceCategories = [
	{
		name: 'neurotoxins',
		isNew: false,
		tagline:
			'Achieve smooth, youthful skin with our expert neurotoxin treatments, designed to reduce fine lines and wrinkles for a refreshed look.',
		description:
			'Neurotoxins are a highly effective, FDA-approved treatment that reduces the appearance of lines and wrinkles, resulting in a smoother and more youthful look. By targeting the underlying causes of wrinkles, neurotoxins prevent new wrinkles from forming, offering long-lasting results with minimal discomfort and no downtime.',

		aboutSection: [
			{
				title: 'What are Neurotoxins?',
				content:
					'Neurotoxins are an FDA-approved treatment that has been used medically since the 1970s. Safe and highly effective, neurotoxin treatments like Botox®, Dysport®, and Xeomin® give the skin a smooth, renewed appearance that looks natural. These treatments require zero downtime and are quick to administer.'
			},

			{
				title: 'How Do Neurotoxins Work?',
				content:
					'Neurotoxins target the underlying causes of wrinkles and frown lines by blocking the nerve signals that cause muscle movement. This action allows wrinkles to soften and prevents new wrinkles from forming, leading to a more youthful appearance.'
			},

			{
				title: 'What to Expect',
				content:
					'The treatment is quick and can typically be completed with a few tiny injections in less than 30 minutes. Noticeable results are generally observed 5-7 days after treatment, with full results visible 14 days post-treatment.'
			}
		],

		img: categoryNeurotoxins,
		coming_soon: false,
		faq: [
			{
				index: 'q1',
				q: 'How much treatment will I need?',
				a: 'The amount of treatment needed depends on several factors, including the area(s) being treated (such as 11s, forehead, crow’s feet), the strength of your facial muscles, and the depth of your existing lines. A complimentary consultation with our practitioners will help create a personalized plan for you.'
			},
			{
				index: 'q2',
				q: 'Does it hurt?',
				a: 'Most clients describe the sensation as a tiny pinch. The needle used is quite small, goes in smoothly, and the neurotoxin is injected quickly, resulting in minimal pain. Numbing agents are not typically used for this treatment.'
			},
			{
				index: 'q3',
				q: 'What is the downtime?',
				a: 'There is virtually zero downtime with neurotoxin treatments. Often referred to as a “lunchtime procedure,” most patients can return to work or normal activities immediately. Some redness and swelling may occur at the injection sites but usually subside within a few hours. Minor bruising is rare.'
			},
			{
				index: 'q4',
				q: 'How long do results last?',
				a: 'Results typically last around 3-6 months, depending on the treatment location, your muscle activity, and your body’s response.'
			},
			{
				index: 'q5',
				q: 'Are Botox and Dysport the same?',
				a: 'While Botox®, Dysport®, and Xeomin® are all neurotoxin injectables used to treat and prevent wrinkles, their chemical compositions slightly differ. Our practitioners will explain the differences and help you choose the best product for your needs.'
			},
			{
				index: 'q6',
				q: 'Are there any side effects?',
				a: 'Neurotoxin injections are very common and low-risk procedures. The most reported side effects include headaches, minor bruising, and swelling at the injection site, although these are rare. Your nurse injector will cover all potential risks before treatment.'
			}
		],
		preTreatmentInstructions: [
			{
				index: '1',
				heading: 'Avoid Makeup',
				context:
					'Do not wear makeup to your appointment so our injectors can see your fine lines and wrinkles clearly.'
			},
			{
				index: '2',
				heading: 'Timing',
				context: 'Schedule your appointment at least two weeks before any important event.'
			},
			{
				index: '3',
				heading: 'Alcohol',
				context: 'Avoid drinking alcohol for 24 hours before the injection.'
			},
			{
				index: '4',
				heading: 'Skincare Products',
				context: 'Avoid Retin-A, Tretinoin, and Retinoids for three days prior to the injection.'
			},
			{
				index: '5',
				heading: 'Skin Cleanliness',
				context: 'Arrive with clean, makeup-free skin for proper assessment and injection planning.'
			},
			{
				index: '6',
				heading: 'Eligibility',
				context: 'Clients who are pregnant or nursing are not eligible for neurotoxin treatment.'
			}
		],

		postTreatmentInstructions: [
			{
				index: '1',
				heading: 'No Makeup',
				context: 'Avoid applying makeup immediately after treatment.'
			},
			{
				index: '2',
				heading: 'Stay Upright',
				context: 'Do not lie down for 4 hours.'
			},
			{
				index: '3',
				heading: 'Excercise',
				context: 'Avoid exercise for 24 hours; walking is okay.'
			},
			{
				index: '4',
				heading: 'Alchohol',
				context: 'Avoid drinking alcohol for 24 hours after the injection.'
			},
			{
				index: '5',
				heading: 'Avoid Massaging',
				context:
					'Do not massage the area, including heavy application of serums or moisturizers, for 4-6 hours.'
			},
			{
				index: '6',
				heading: 'Avoid Facials',
				context: 'Avoid facials for one week.'
			}
		]
	},

	{
		name: 'medical weight loss',
		isNew: true,
		tagline:
			'Achieve lasting weight loss with Semaglutide – a proven solution for controlling appetite and enhancing results.',
		description: `You are not alone if you’re struggling to lose those extra pounds! Approximately 70% of American adults are considered overweight or obese. We are pleased to offer Semaglutide, a treatment that has made weight loss solutions more accessible. Take control of your weight loss journeys with Semaglutide.`,
		aboutSection: [
			{
				title: 'How Does Semaglutide Work?',
				content: `Semaglutide is a prescription medication specifically compounded to assist with weight management. When combined with a healthy diet and regular exercise, Semaglutide can help adults achieve significant weight loss. It belongs to a class of medications called glucagon-like peptide-1 (GLP-1) agonists, which mimic the natural hormone GLP-1 in the body. This treatment works by regulating blood sugar levels after meals, stimulating insulin secretion, and slowing down the release of sugar into the bloodstream. By delaying stomach emptying, Semaglutide helps you feel fuller for longer, reducing overall calorie consumption. Clinical studies have shown that weekly Semaglutide injections can lead to an average weight loss of 9-13% over a year when combined with healthy lifestyle habits.`
			},
			{
				title: 'What to Expect',
				content:
					'Semaglutide is administered via a simple injection just under the skin (subcutaneously), typically in the abdomen. Your practitioner will guide you on how to administer the injections and adjust the dosage as needed. Most patients begin to see weight loss after their dose has been increased one to two times, typically within a month. It’s important to have realistic expectations and to stay consistent with your treatment plan to achieve the best results.'
			},

			{
				title: 'Who Is a Good Candidate for Semaglutide?',
				content: `
Semaglutide is ideal for individuals with a body mass index (BMI) of 30 or greater or for adults with a BMI of 27 who also have at least one weight-related complication such as hypertension, insulin resistance, high cholesterol, or heart disease. However, it’s not suitable for everyone. People with the following conditions should avoid Semaglutide:`,

				list: [
					'Pregnant or breastfeeding women',
					'Individuals with a history of pancreatitis',
					'Those with Type-1 diabetes',
					'People allergic to Semaglutide or any of its ingredients',
					'Individuals with Multiple Endocrine Neoplasia syndrome type 2',
					'Those with a history of thyroid cancer'
				],

				contentDisclaimer: `Disclaimer: Always consult a medical professional before starting Semaglutide to ensure it’s the right fit for you.`,
				insuranceDisclaimer: `Insurance Disclaimer: Please note that we do not accept insurance for these medications, as obtaining them through insurance can be both challenging and costly. However, we do accept HSA/FSA cards for payment, as well as offer competitive pricing and flexible financing options to make your treatment more affordable.`
			}
		],
		img: weightLossImage,
		coming_soon: false,

		faq: [
			{
				index: 'q1',
				q: 'How does Semaglutide work?',
				a: `Semaglutide is an FDA-approved medication specifically designed for adult weight management. Semaglutide is a type of medication called a glucagon-like peptide-1 (GLP-1) agonist, which mimics the hormone GLP-1 that the body naturally produces. The breakthrough weight loss solution lowers blood sugar levels after meals. It regulates blood sugar by stimulating glucose-dependent insulin secretion. Semaglutide slows down the release of sugar into your blood, so your body burns more fat. It also delays stomach emptying, leaving you feeling fuller longer and limiting your overall calorie consumption. Several clinical studies show that weekly Semaglutide injections are highly effective at promoting weight loss. In one study, individuals treated with Semaglutide lost an average of 9-13 percent of their body weight over the course of a year without making any changes to their diet and exercise habits.`
			},
			{
				index: 'q2',
				q: 'What are the common side effects?',
				a: 'Most common side effects are nausea, vomiting, stomach upset, diarrhea, tiredness, dizziness, or constipation. Initial side effects usually lessens as you continue to use Semaglutide. '
			},
			{
				index: 'q3',
				q: 'What kind of results can I expect?',
				a: 'It’s crucial to know that semaglutide results don’t manifest right away. Having realistic expectations and attending all your treatment sessions will increase your chances of satisfactory results. Men and women who eat well, exercise, and stick to their treatment plans observe a stunning transformation. One way to stay motivated and observe your progress is by taking before and after photos. Session after session, you’ll see how your body is reacting to the treatment. Semaglutide is a promising option for those looking to lose weight. Its ability to suppress appetite, reduce cravings, and increase fullness can lead to faster weight loss. Those with Type-2 diabetes especially benefit from an extra perk—improved blood sugar control.  '
			},
			{
				index: 'q4',
				q: 'Who is a good candidate for Semaglutide?',
				a: 'Semaglutide is ideal for individuals with a body mass index (BMI) of 30 or greater or adults with a BMI of 27 and at least one complication related to body weight, such as hypertension, insulin resistance, high cholesterol, or heart disease.'
			},

			{
				index: 'q5',
				q: 'How soon do you see results?',
				a: 'Most patients will begin to see weight loss after their initial dose has increased one to two times, typically within a month.  '
			},
			{
				index: 'q6',
				q: 'How is Semaglutide administered?',
				a: 'Semaglutide is injected just under the skin (subcutaneously), typically in your abdomen. '
			},

			{
				index: 'q7',
				q: 'Who shouldn’t take Semaglutide?',
				a: {
					answerHeading: `Despite semaglutide being a good weight loss tool for many people, it's not for everyone. Certain people shouldn't take it:`,
					answerList: [
						`Pregnant or breastfeeding women`,
						`People with a history of pancreatitis`,
						`People with Type-1 diabetes`,
						`People with an allergy to semaglutide (or any of its ingredients)`,
						`People with Multiple Endocrine Neoplasia syndrome type 2`,
						`Always consult a medical professional before taking semaglutide. Be open and honest about any pre-existing conditions and allergies, so we can make sure it's a good fit before beginning treatment.`
					]
				}
			}
		],

		disclaimer: {
			content:
				'Disclaimer: This information provided is for general informational purposes only. It is not intended as a substitute for professional advice from a qualified healthcare professional and should not be relied upon as personal health advice. The information contained in this content is not meant to diagnose, treat, cure, or prevent any disease. You are advised to consult with a qualified healthcare professional for any medical concerns. Use of this information is at your own risk. We are not responsible for any adverse effects, or consequences resulting from the use of any suggestions or information provided.'
		},
		conclusion: {
			title: 'Conclusion',
			content:
				'Semaglutide offers an option for individuals looking to lose weight. By suppressing appetite, reducing cravings, and increasing feelings of fullness, Semaglutide can help you achieve your weight loss goals. If you’re ready to take control of your weight and improve your overall health, contact our Medspa today to schedule a consultation and learn more about how Semaglutide can benefit you.'
		}
	},

	{
		name: 'dermal fillers',
		isNew: false,
		tagline:
			'Enhance your natural beauty with our dermal filler treatments, restoring volume and contour for a youthful, rejuvenated appearance.',
		description: `If you’re considering enhancing your facial features, dermal fillers offer a non-surgical option that may help restore volume and smooth fine lines and wrinkles. At ${companyInfo.name}, we provide a variety of dermal fillers tailored to target areas such as lips, cheeks, jawline, and nasolabial folds, helping you work towards a naturally youthful appearance with minimal downtime.`,
		aboutSection: [
			{
				title: 'What are Dermal Fillers?',
				content:
					'Dermal fillers are injectable treatments made from hyaluronic acid, a substance naturally found in the skin known for its hydrating properties. These fillers can help to restore lost volume, enhance soft tissues, and reduce the appearance of fine lines and wrinkles, offering a fuller look to lips, cheeks, chin, and other facial areas.'
			},

			{
				title: 'How Do Dermal Fillers Work?',
				content:
					'During your consultation, our experienced practitioners will assess your skin, facial structure, and aesthetic goals to help determine which dermal filler may be best suited for your needs. The selected filler is injected into the targeted areas, aiming to add volume and smooth lines and wrinkles. While individual results vary, many patients achieve a more refreshed appearance with minimal downtime.'
			},
			{
				title: 'What to Expect',
				content:
					'The duration of the dermal filler procedure typically ranges from 30 minutes to 2 hours, depending on the areas being treated. Some mild swelling, bruising, or tenderness at the injection site is common but generally resolves within a few days. Results are often visible immediately, with improvements continuing over the next 2-3 weeks as the filler integrates with your skin. Depending on the type of filler used and the area treated, results can last between 6 to 24 months. For the best experience, follow all aftercare instructions provided by your practitioner.'
			}
		],
		img: categoryDermalFillers,
		coming_soon: false,

		faq: [
			{
				index: 'q1',
				q: 'Does it hurt?',
				a: 'Dermal fillers typically contain lidocaine, an anesthetic that may help minimize discomfort during the procedure. Some patients may experience a mild pinching sensation during the injections. To further reduce any potential discomfort, a topical numbing agent can also be applied before the procedure. Individual experiences with pain or discomfort can vary.'
			},
			{
				index: 'q2',
				q: 'What is the downtime?',
				a: 'Dermal fillers usually require minimal downtime, but this can vary from person to person. Common side effects include redness, bruising, swelling, tenderness, or itching around the injection sites, which typically resolve within a few days. To allow time for healing, it’s advisable to avoid scheduling important events for a few days post-treatment.'
			},
			{
				index: 'q3',
				q: 'How long do results last?',
				a: 'Results from dermal filler treatments are generally visible immediately and may continue to improve over 2-3 weeks as the filler integrates with your skin. Depending on the type of filler used and the area treated, results can last from 6 to 24 months. Individual results will vary, and follow-up treatments may be needed to maintain desired outcomes.'
			},
			{
				index: 'q4',
				q: 'Potential Side Effects',
				a: 'Common side effects of dermal fillers include redness, swelling, bruising, and tenderness at the injection sites. These symptoms are usually mild and tend to subside within a few days. In rare cases, more serious side effects like infection, filler migration, or vascular complications may occur. It is important to consult with your practitioner for a thorough understanding of all potential risks and to determine if dermal fillers are suitable for you.'
			}
		],
		preTreatmentInstructions: [
			{
				index: 1,
				heading: 'Avoid Makeup',
				context: 'Arrive with clean, makeup-free skin to facilitate a proper assessment.'
			},
			{
				index: 2,
				heading: 'Medications',
				context:
					'Avoid NSAIDs (e.g., Ibuprofen, Advil), fish oil, Gingko Biloba, St. John’s Wort, and high doses of Vitamin E for one week before treatment, as these can increase the risk of bruising.'
			},
			{
				index: 3,
				heading: 'Retinoids',
				context:
					'Avoid Retin-A, Tretinoin, and other retinoids for three days prior to the procedure.'
			},
			{
				index: 4,
				heading: 'Alcohol',
				context:
					'Refrain from drinking alcohol for 24 hours before the injection to minimize the risk of bruising.'
			},
			{
				index: 5,
				heading: 'Bruising',
				context:
					'If you are prone to bruising, consider taking Arnica tablets one day before treatment, but consult your healthcare provider before starting any supplements.'
			},
			{
				index: 6,
				heading: 'Dental',
				context:
					'Avoid dental appointments two weeks before and after treatment to reduce the risk of complications.'
			},

			{
				index: 7,
				heading: 'Pregnancy/Nursing',
				context:
					'Clients who are pregnant or nursing are not eligible for dermal filler treatments.'
			}
		],

		postTreatmentInstructions: [
			{
				index: 1,
				heading: 'No Makeup',
				context:
					'Avoid applying makeup immediately after treatment to reduce the risk of infection.'
			},
			{
				index: 2,
				heading: 'Stay Upright',
				context:
					'Avoid lying down for at least four hours post-procedure to help prevent filler migration.'
			},
			{
				index: 3,
				heading: 'Sleeping Position',
				context:
					'Sleep on your back for 24-48 hours following the procedure to maintain filler placement.'
			},
			{
				index: 4,
				heading: 'Touching Face',
				context:
					'Avoid touching your face for 24 hours unless applying topicals as advised by your practitioner.'
			},
			{
				index: 5,
				heading: 'Exercise',
				context:
					'Refrain from strenuous exercise for 24 hours; light walking is generally acceptable.'
			},
			{
				index: 6,
				heading: 'Hot/Cold Exposure',
				context:
					'Avoid exposure to extreme heat or cold for 24 hours, as this may affect the filler.'
			},

			{
				index: 7,
				heading: 'Facials/Massages',
				context:
					'No facials or massages on treated areas for two weeks post-treatment to avoid disturbing the filler.'
			},
			{
				index: 8,
				heading: 'For lip injections only',
				context:
					'avoid using straws, smoking, heavy kissing, or oral activities for two weeks to ensure optimal results.'
			}
		],
		choosingRight: {
			title: 'Choosing the Right Dermal Filler',
			content:
				'Our practitioners offer a range of dermal fillers designed to meet various aesthetic needs. During your consultation, they will discuss the options available and help determine the most suitable treatment plan based on your goals and medical history. Whether you’re considering enhancing your lips, contouring your cheeks, defining your jawline, or smoothing nasolabial folds, our team will guide you toward the treatment that aligns with your desired outcomes.'
		},
		conclusion: {
			title: 'Conclusion',
			content:
				'Dermal fillers provide a non-surgical option that may help enhance your facial features, restore volume, and reduce the appearance of wrinkles. With typically minimal downtime and results that can last several months, fillers offer a convenient choice for those looking to achieve their aesthetic goals. Contact us today to schedule a consultation and explore how dermal fillers might help you achieve your desired look.'
		}
	},

	{
		name: 'prp',
		isNew: false,
		tagline:
			'Revitalize your skin with PRP therapy, harnessing your body’s natural healing power for a radiant, youthful glow.',
		description:
			"Platelet-Rich Plasma therapy uses your own blood's growth factors to rejuvenate skin, promote healing, and enhance overall complexion.",
		aboutSection: [
			{
				title: 'What is PRP Therapy?',
				content:
					'Neurotoxins are an FDA-approved treatment that has been used medically since the 1970s. Safe and highly effective, neurotoxin treatments like Botox®, Dysport®, and Xeomin® give the skin a smooth, renewed appearance that looks natural. These treatments require zero downtime and are quick to administer.'
			},
			{
				title: 'How Does PRP Therapy Work?',
				content:
					'Neurotoxins target the underlying causes of wrinkles and frown lines by blocking the nerve signals that cause muscle movement. This action allows wrinkles to soften and prevents new wrinkles from forming, leading to a more youthful appearance.'
			},
			{
				title: 'What to Expect',
				content:
					'The treatment is quick and can typically be completed with a few tiny injections in less than 30 minutes. Noticeable results are generally observed 5-7 days after treatment, with full results visible 14 days post-treatment.'
			}
		],

		img: prpImage,
		coming_soon: true,
		faq: [
			{
				index: 'q1',
				q: 'How much treatment will I need?',
				a: 'The amount of treatment needed depends on several factors, including the area(s) being treated (such as 11s, forehead, crow’s feet), the strength of your facial muscles, and the depth of your existing lines. A complimentary consultation with our practitioners will help create a personalized plan for you.'
			},
			{
				index: 'q2',
				q: 'Does it hurt?',
				a: 'Most clients describe the sensation as a tiny pinch. The needle used is quite small, goes in smoothly, and the neurotoxin is injected quickly, resulting in minimal pain. Numbing agents are not typically used for this treatment.'
			},
			{
				index: 'q3',
				q: 'What is the downtime?',
				a: 'There is virtually zero downtime with neurotoxin treatments. Often referred to as a “lunchtime procedure,” most patients can return to work or normal activities immediately. Some redness and swelling may occur at the injection sites but usually subside within a few hours. Minor bruising is rare.'
			},
			{
				index: 'q4',
				q: 'How long do results last?',
				a: 'Results typically last around 3-6 months, depending on the treatment location, your muscle activity, and your body’s response.'
			},
			{
				index: 'q5',
				q: 'Are Botox and Dysport the same?',
				a: 'While Botox®, Dysport®, and Xeomin® are all neurotoxin injectables used to treat and prevent wrinkles, their chemical compositions slightly differ. Our practitioners will explain the differences and help you choose the best product for your needs.'
			},
			{
				index: 'q6',
				q: 'Are there any side effects?',
				a: 'Neurotoxin injections are very common and low-risk procedures. The most reported side effects include headaches, minor bruising, and swelling at the injection site, although these are rare. Your nurse injector will cover all potential risks before treatment.'
			}
		],
		preTreatmentInstructions: [
			{
				index: '1',
				heading: 'Avoid Makeup',
				context:
					'Do not wear makeup to your appointment so our injectors can see your fine lines and wrinkles clearly.'
			},
			{
				index: '2',
				heading: 'Timing',
				context: 'Schedule your appointment at least two weeks before any important event.'
			},
			{
				index: '3',
				heading: 'Alcohol',
				context: 'Avoid drinking alcohol for 24 hours before the injection.'
			},
			{
				index: '4',
				heading: 'Skincare Products',
				context: 'Avoid Retin-A, Tretinoin, and Retinoids for three days prior to the injection.'
			},
			{
				index: '5',
				heading: 'Skin Cleanliness',
				context: 'Arrive with clean, makeup-free skin for proper assessment and injection planning.'
			},
			{
				index: '6',
				heading: 'Eligibility',
				context: 'Clients who are pregnant or nursing are not eligible for neurotoxin treatment.'
			}
		],

		postTreatmentInstructions: [
			{
				index: '1',
				heading: 'No Makeup',
				context: 'Avoid applying makeup immediately after treatment.'
			},
			{
				index: '2',
				heading: 'Stay Upright',
				context: 'Do not lie down for 4 hours.'
			},
			{
				index: '3',
				heading: 'Excercise',
				context: 'Avoid exercise for 24 hours; walking is okay.'
			},
			{
				index: '4',
				heading: 'Alchohol',
				context: 'Avoid drinking alcohol for 24 hours after the injection.'
			},
			{
				index: '5',
				heading: 'Avoid Massaging',
				context:
					'Do not massage the area, including heavy application of serums or moisturizers, for 4-6 hours.'
			},
			{
				index: '6',
				heading: 'Avoid Facials',
				context: 'Avoid facials for one week.'
			}
		]
	}
];

export const services = [
	{
		name: 'Semaglutide',
		category: 'medical weight loss',
		isNew: true,

		description:
			'Semaglutide is a prescription GLP-1 agonist that aids in weight loss by regulating blood sugar, slowing digestion, and reducing appetite, leading to significant weight reduction when paired with a healthy diet and exercise.',
		img: semaglutideImage,
		coming_soon: false,
		use_cases: [
			'Temporary smoothing of facial wrinkles and improving your appearance',
			'Severe underarm sweating',
			'Cervical dystonia',
			'Eye twitching',
			'Chronic migraines',
			'Overactive bladder'
		]
	},

	{
		name: 'Botox',
		category: 'Neurotoxins',
		isNew: false,

		description:
			"Botox is a drug made from a toxin produced by the bacterium Clostridium botulinum. It's the same toxin that causes a life-threatening type of food poisoning called botulism. Doctors use it in small doses to treat health problems, including",
		img: botoxImage,
		coming_soon: false,
		use_cases: [
			'Temporary smoothing of facial wrinkles and improving your appearance',
			'Severe underarm sweating',
			'Cervical dystonia',
			'Eye twitching',
			'Chronic migraines',
			'Overactive bladder'
		]
	},
	{
		name: 'Dysport',
		category: 'Neurotoxins',
		isNew: false,
		img: dysportImage,
		coming_soon: false,
		description:
			'Dysport is a prescription injection for temporary improvement in the look of moderate to severe frown lines between the eyebrows (glabellar lines) in adults less than 65 years of age.',
		use_cases: [
			'Temporary smoothing of facial wrinkles and improving your appearance',
			'Severe underarm sweating',
			'Cervical dystonia',
			'Eye twitching',
			'Chronic migraines',
			'Overactive bladder'
		]
	},

	{
		name: 'Juvederm',
		category: 'Dermal Fillers',
		isNew: false,
		img: juvedermImage,
		coming_soon: false,
		description:
			'Juvederm is a family of injectable hyaluronic acid dermal fillers used to provide 9 months to one year of correction for moderate to severe facial wrinkles and folds, such as nasolabial folds (lines from the nose to the corners of the mouth).',
		use_cases: [
			'Temporary smoothing of facial wrinkles and improving your appearance',
			'Severe underarm sweating',
			'Cervical dystonia',
			'Eye twitching',
			'Chronic migraines',
			'Overactive bladder'
		]
	},

	{
		name: 'Juvederm Vollure XC',
		category: 'Dermal Fillers',
		isNew: false,
		img: juvedermVollureImage,
		coming_soon: false,
		description:
			'A long-lasting dermal filler that smooths moderate to severe facial wrinkles and folds for a natural, youthful appearance.',
		use_cases: [
			'Temporary smoothing of facial wrinkles and improving your appearance',
			'Severe underarm sweating',
			'Cervical dystonia',
			'Eye twitching',
			'Chronic migraines',
			'Overactive bladder'
		]
	},

	{
		name: 'Restylane Contour',
		category: 'Dermal Fillers',
		isNew: false,
		img: restylaneContourImage,
		coming_soon: false,
		description:
			'A hyaluronic acid filler specifically designed to enhance cheek definition and restore midface volume with natural-looking results.',
		use_cases: [
			'Temporary smoothing of facial wrinkles and improving your appearance',
			'Severe underarm sweating',
			'Cervical dystonia',
			'Eye twitching',
			'Chronic migraines',
			'Overactive bladder'
		]
	},

	{
		name: 'Restylane Lyft',
		category: 'Dermal Fillers',
		isNew: false,
		img: restylaneLyftImage,
		coming_soon: false,
		description:
			'A versatile filler that provides lift and volume to the cheeks and corrects moderate to severe facial wrinkles and folds.',
		use_cases: [
			'Temporary smoothing of facial wrinkles and improving your appearance',
			'Severe underarm sweating',
			'Cervical dystonia',
			'Eye twitching',
			'Chronic migraines',
			'Overactive bladder'
		]
	},

	{
		name: 'Restylane Refyne',
		category: 'Dermal Fillers',
		isNew: false,
		img: restylaneRefyneImage,
		coming_soon: false,
		description:
			'A dermal filler that softens mild to moderate laugh lines, allowing for natural movement and expressions.',
		use_cases: [
			'Temporary smoothing of facial wrinkles and improving your appearance',
			'Severe underarm sweating',
			'Cervical dystonia',
			'Eye twitching',
			'Chronic migraines',
			'Overactive bladder'
		]
	},

	{
		name: 'Restylane Defyne',
		category: 'Dermal Fillers',
		isNew: false,

		img: restylaneDefyneImage,
		coming_soon: false,
		description:
			'A flexible filler that smooths out deep laugh lines and enhances facial contours while maintaining natural expressions.',
		use_cases: [
			'Temporary smoothing of facial wrinkles and improving your appearance',
			'Severe underarm sweating',
			'Cervical dystonia',
			'Eye twitching',
			'Chronic migraines',
			'Overactive bladder'
		]
	},

	{
		name: 'PRP (Platelet-Rich Plasma)',
		category: 'PRP',
		isNew: false,
		img: prpImage,
		coming_soon: true,
		description:
			"Platelet-Rich Plasma therapy uses your own blood's growth factors to rejuvenate skin, promote healing, and enhance overall complexion.",
		use_cases: [
			'Temporary smoothing of facial wrinkles and improving your appearance',
			'Severe underarm sweating',
			'Cervical dystonia',
			'Eye twitching',
			'Chronic migraines',
			'Overactive bladder'
		]
	}
];
