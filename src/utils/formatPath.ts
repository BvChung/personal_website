export function removeTrailingSlash(pathname: string) {
	const matchTrailingSlash = /\w+\/$/;

	if (matchTrailingSlash.test(pathname)) {
		return pathname.slice(0, -1);
	}

	return pathname;
}

export function isPathActive(currentPath: string, targetPath: string): boolean {
	const parameterSlashIndex = currentPath.lastIndexOf("/");
	const parameter = currentPath.slice(parameterSlashIndex + 1);
	const basePath = currentPath.slice(0, parameterSlashIndex);

	if (
		targetPath === basePath &&
		parameter.length > 0 &&
		!isNaN(Number(parameter))
	) {
		return true;
	}

	return currentPath === targetPath;
}
