// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Report action buttons.
 *
 * @module      core_reportbuilder/action_buttons
 * @copyright   2021 University of Canterbury
 * @author      Alex Morris <alex.morris@catalyst.net.nz>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

export const init = () => {
    let buttons = document.querySelectorAll('*[id^="action-button-"]');
    buttons.forEach(button => {
        button.addEventListener('click', actionButtonHandler);
    });
};

/**
 * Loads the action buttons specified AMD module and calls the init function.
 *
 * @param {Event} button
 */
const actionButtonHandler = (button) => {
    if (button.target.hasAttribute('data-module')) {
        import(button.target.dataset.module)
            .then((module) => {
                module.init();
            });
    }
};
