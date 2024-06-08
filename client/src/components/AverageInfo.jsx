function AverageInfo({ rates }) {
	const calculateLastRate = () => {
		if (rates.length === 0) {
			return 0;
		}
		return rates[rates.length - 1].rate;
	};

	const calculateAverageRate = () => {
		if (rates.length === 0) {
			return 0;
		}
		const total = Math.round(
			rates.reduce((sum, rateObj) => sum + rateObj.rate, 0)
		);
		return Math.round(total / rates.length);
	};

	const averageRate = calculateAverageRate();
	const lastRate = calculateLastRate();

	return (
		<article className="flex justify-around items-center pb-6 px-4">
			<section className="flex flex-col gap-2 text-center">
				<p className="xxs:text-sm xsl:text-xl">Taux moyen</p>
				<p className="xxs:text-sm xsl:text-lg">{averageRate} mg/dl</p>
			</section>

			<section className="flex flex-col gap-2 text-center">
				<p className="xxs:text-sm xsl:text-xl">Dernière mesure</p>
				<p className="xxs:text-sm xsl:text-lg">{lastRate} mg/dl</p>
			</section>
		</article>
	);
}

export default AverageInfo;
