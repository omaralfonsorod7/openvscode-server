/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare module 'vscode' {

	export interface FindFiles2Options {
		// note: this is just FindTextInFilesOptions without select properties (include, previewOptions, beforeContext, afterContext)

		/**
		 * A {@link GlobPattern glob pattern} that defines files and folders to exclude. The glob pattern
		 * will be matched against the file paths of resulting matches relative to their workspace. When `undefined`, default excludes will
		 * apply.
		 */
		exclude?: GlobPattern;

		/**
		 * Whether to use the values for files.exclude. Defaults to true.
		 */
		useDefaultExcludes?: boolean;

		/**
		 * Whether to use the values for search.exclude. Defaults to true. Will not be followed if `useDefaultExcludes` is set to `false`.
		 */
		useDefaultSearchExcludes?: boolean;

		/**
		 * The maximum number of results to search for
		 */
		maxResults?: number;

		/**
		 * Whether external files that exclude files, like .gitignore, should be respected.
		 * See the vscode setting `"search.useIgnoreFiles"`.
		 */
		useIgnoreFiles?: boolean;

		/**
		 * Whether global files that exclude files, like .gitignore, should be respected.
		 * Must set `useIgnoreFiles` to `true` to use this.
		 * See the vscode setting `"search.useGlobalIgnoreFiles"`.
		 */
		useGlobalIgnoreFiles?: boolean;

		/**
		 * Whether files in parent directories that exclude files, like .gitignore, should be respected.
		 * Must set `useIgnoreFiles` to `true` to use this.
		 * See the vscode setting `"search.useParentIgnoreFiles"`.
		 */
		useParentIgnoreFiles?: boolean;

		/**
		 * Whether symlinks should be followed while searching.
		 * See the vscode setting `"search.followSymlinks"`.
		 */
		followSymlinks?: boolean;
	}

	/**
	 * Represents a session of a currently logged in user.
	 */
	export namespace workspace {
		/**
		 * Find files across all {@link workspace.workspaceFolders workspace folders} in the workspace.
		 *
		 * @example
		 * findFiles('**​/*.js', {exclude: '**​/out/**', useIgnoreFiles: true}, 10)
		 *
		 * @param filePattern A {@link GlobPattern glob pattern} that defines the files to search for. The glob pattern
		 * will be matched against the file paths of resulting matches relative to their workspace. Use a {@link RelativePattern relative pattern}
		 * to restrict the search results to a {@link WorkspaceFolder workspace folder}.
		 * @param options A set of {@link FindFiles2Options FindFiles2Options} that defines where and how to search (e.g. exclude settings).
		 * If enabled, any ignore files will take prescendence over any files found in the `filePattern` parameter.
		 * @param token A token that can be used to signal cancellation to the underlying search engine.
		 * @returns A thenable that resolves to an array of resource identifiers. Will return no results if no
		 * {@link workspace.workspaceFolders workspace folders} are opened.
		 */
		export function findFiles2(filePattern: GlobPattern, options?: FindFiles2Options, token?: CancellationToken): Thenable<Uri[]>;
	}
}
